import React from "react";
import "../styles/modal.scss";

export const Modal = ({ onCreateTask }) => {
  const handleSubmit = (event) => {
    const form = event.target;
    const name = form.elements.name.value;
    const desc = form.elements.desc.value;

    form.reset();
    onCreateTask({ name, desc });
  };
  return (
    <dialog className="modal">
      <form method="dialog" onSubmit={handleSubmit}>
        <p>Creating task</p>
        <input placeholder="Name" name="name" type="text" required />
        <textarea placeholder="Description" name="desc" rows="4" cols="50" />
        <button>Create</button>
      </form>
    </dialog>
  );
};
