import React from "react";
import ReactDOM from "react-dom";
import Wrapper from "../Helpers/Wrapper";
import Backdrop from "./Backdrop";
import Overlay from "./ModalOverlay";

const ErrorModal = (props) => {
    return (
        <Wrapper>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <Overlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById("overlay-root")
            )}
        </Wrapper>
    );
};

export default ErrorModal;
