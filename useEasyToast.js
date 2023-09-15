import {useContext} from "react";
import ToastContext from "./ToastContext";

const useEasyToast = () => {
    const [showToast, hideToast] = useContext(ToastContext);
    return [showToast, hideToast];
}

export default useEasyToast;