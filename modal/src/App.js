import React, {useState} from "react";
import LaliaModal from "./components/LaliaModal";

function App() {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<div className="App">
			<button onClick={toggleModal}>Ouvrir le modal</button>
			<LaliaModal
				show={showModal}
				onClose={toggleModal}
				title="Titre"
				content="Contenu de la modal"
				closeButtonText="Fermer"
				showCloseIcon={true}
			/>
		</div>
	);
}

export default App;
