import React, { useState } from "react";
import Modal from "../components/Modal";

const JavaScriptTips = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h2>JavaScript Tips</h2>
      <p>More lorem ipsum JavaScript Tips data goes here</p>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h3>React Modal Example</h3>
          <p>This is a modal popup for the JavaScript Tips post.</p>
        </Modal>
      )}
    </div>
  );
};

export default JavaScriptTips;
