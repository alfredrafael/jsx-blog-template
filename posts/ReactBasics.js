import React, { useState } from "react";
import Modal from "../components/Modal";

const ReactBasics = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h2>React Basics</h2>
      <p>Learn React from scratch with this beginner's guide.</p>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h3>React Modal Example</h3>
          <p>This is a modal popup for the React Basics post.</p>
        </Modal>
      )}
    </div>
  );
};

export default ReactBasics;
