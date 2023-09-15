import {Children, cloneElement, isValidElement, useReducer} from "react";
import {Toast, ToastContainer} from "react-bootstrap";
import ToastContext from "./ToastContext";

const handleToastList = (toastList, action) => {
    if (action.type === "addTop") {
        const _toastList = [...toastList];
        _toastList.unshift(action.data);
        return _toastList;
    } else if (action.type === "addBottom") {
        const _toastList = [...toastList];
        _toastList.push(action.data);
        return _toastList;
    } else if (action.type === "remove") {
        return toastList.filter((t) => t.id !== action.data.id);
    } else {
        return toastList;
    }
}
const EasyToastContainer = ({children, ...props}) => {
    const [toastList, dispatchToastList] = useReducer(handleToastList, [])
    const showToast = (toastElement, addPosition) => {
        dispatchToastList({
            type: addPosition === "bottom" ? "addBottom" : "addTop",
            data: {
                id: Math.random().toString(16).slice(2),
                element: toastElement,
            }
        });
    }
    const hideToast = (event, toastId) => {
        if (!toastId && event) {
            toastId = event.target.getAttribute("data-toast-id");
        }
        dispatchToastList({
            type: "remove",
            data: {
                id: toastId
            },
        });
    }
    const addToastIdAttribute = (children, toastId) => {
        return Children.map(children, (child) => {
            if (!isValidElement(child)) return child;
            return cloneElement(child, {
                "data-toast-id": toastId,
                children: addToastIdAttribute(child.props.children, toastId)
            })
        })
    }
    return (
        <>
            <ToastContext.Provider value={[showToast, hideToast]}>
                <ToastContainer {...props}>
                    {toastList?.map((toast) => (
                        <Toast
                            {...toast.element.props}
                            key={toast.id}
                            onClose={() => hideToast(null, toast.id)}
                        >
                            {addToastIdAttribute(toast.element.props.children, toast.id)}
                        </Toast>
                    ))}
                </ToastContainer>
                {children}
            </ToastContext.Provider>
        </>
    )
}
export default EasyToastContainer;