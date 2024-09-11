import React from "react";
import "../styles/Modal.css";

const Modal = ({
	show,
	onClose,
	title,
	content,
	linkText,
	linkUrl,
	closeButtonText,
	showCloseIcon = true,
}) => {
	if (!show) {
		return null;
	}

	const handleButtonClick = () => {
		if (linkUrl) {
			window.open(linkUrl, "_blank", "noopener,noreferrer");
		}
	};

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={e => e.stopPropagation()}>
				<h2>{title}</h2>
				<p>{content}</p>

				{linkUrl && linkText && (
					<button className="modal-btn link-button" onClick={handleButtonClick}>
						{linkText}
					</button>
				)}
				{showCloseIcon && (
					<button className="close-button" onClick={onClose}>
						X
					</button>
				)}
				<button className="modal-btn close-modal-button" onClick={onClose}>
					{closeButtonText || "Fermer"}
				</button>
			</div>
		</div>
	);
};

export default Modal;
