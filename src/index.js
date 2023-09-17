import {cloneElement, createContext, isValidElement, useContext, useReducer} from "react";
import {ToastContainer} from "react-bootstrap";

const ToastContext = createContext([])
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
export const EasyToastContainer = ({children, ...props}) => {
    const [toastList, dispatchToastList] = useReducer(handleToastList, []);
    const showToast = (toastElement, addPosition) => {
        const toastId = Math.random().toString(16).slice(2);
        dispatchToastList({
            type: addPosition === "bottom" ? "addBottom" : "addTop",
            data: {
                id: toastId,
                element: handleToastElement(toastElement, toastId),
            }
        });
    }
    const closeToast = (event, toastId) => {
        if(event && !toastId) {
            let element = event.target;
            while (element && !element.hasAttribute("data-toast-id")) {
                element = element.parentElement;
            }
            toastId = element.getAttribute("data-toast-id");
        }
        if(toastId) {
            dispatchToastList({
                type: "remove",
                data: {
                    id: toastId
                },
            });
        }
    }
    const handleToastElement = (toastElement, toastId) => {
        if(isValidElement(toastElement) && typeof toastElement.type === 'function'){
            return handleToastElement(toastElement.type(toastElement.props), toastId);
        } else {
            return cloneElement(
                toastElement,
                {
                    key: toastId,
                    "data-toast-id": toastId,
                    onClose: () => closeToast(null, toastId)
                },
            )
        }
    }
    return (
        <>
            <ToastContext.Provider value={[showToast, closeToast]}>
                <ToastContainer {...props}>
                    {toastList?.map(toast => (toast.element))}
                </ToastContainer>
                {children}
            </ToastContext.Provider>
        </>
    )
}
export const useEasyToast = () => {
    const [showToast, closeToast] = useContext(ToastContext);
    return [showToast, closeToast];
}
