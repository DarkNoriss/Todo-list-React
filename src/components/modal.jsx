import React from "react";
import { useForm } from "react-hook-form";
import "../styles/modal.scss";

export const Modal = ({ onCreateTask, setOpenmodal }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (event) => {
    const name = event.name;
    const desc = event.desc;

    handleCloseModal();
    onCreateTask({ name, desc });
  };

  const handleCloseModal = () => setOpenmodal(() => false);

  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-header">
          <p>Creating task</p>
          <button onClick={handleCloseModal}>X</button>
        </div>
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Name" type="text" required {...register("name")} />

          <textarea placeholder="Description" rows="4" cols="50" {...register("desc")} />
          <button>Create</button>
        </form>
      </div>
    </div>
  );
};
