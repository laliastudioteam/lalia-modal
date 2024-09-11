import React, {useState} from "react";
import Modal from "./components/Modal";

function App() {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<div className="App">
			<button onClick={toggleModal}>Ouvrir le modal</button>
			<Modal
				show={showModal}
				onClose={toggleModal}
				title="Titre"
				content="Contenu de la modal"
				linkText="Texte de la modal"
				linkUrl="https://www.google.com"
				closeButtonText="Fermer"
				showCloseIcon={true}
			/>
		</div>
	);
}

export default App;
