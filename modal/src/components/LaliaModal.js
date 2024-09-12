import React from "react";
import "../styles/LaliaModal.css";

const LaliaModal = ({
	show = true,
	onClose,
	title,
	content,
	closeButtonText,
	showCloseIcon = true,
}) => {
	if (!show) {
		return null; // La modal ne s'affiche pas si `show` est `false`
	}

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={e => e.stopPropagation()}>
				<h2>{title}</h2>
				<p>{content}</p>
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

export default LaliaModal;
