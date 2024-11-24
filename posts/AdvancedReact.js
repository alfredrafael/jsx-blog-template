import React, { useState } from "react";
import Modal from "../components/Modal";

const AdvancedReact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h2>Advanced React</h2>
      <p>Lorem ipsum advanced react data goes here</p>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h3>React Modal Example</h3>
          <p>This is a modal popup for the Advanced React post.</p>
        </Modal>
      )}
    </div>
  );
};

export default AdvancedReact;
