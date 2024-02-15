import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import selectItems from "../Buy/CheckBoxHandler";
import Modal from "./Modal";
import { useState } from "react";
import ModalFeedBack from "./ModalFeedBack";

export default function ButtonBuy() {
  const [modal, setModal] = useState(false);
  
  const openModal = () => {
    setModal(true);
  };

  return (
    <>
      <Button
        onClick={() => openModal()}
        variant="contained"
        color="success"
        sx={{
          width: "300px",
          height: "70px",
          fontSize: "20px",
          fontFamily: "TT Travels",
          border: "3px solid white",
        }}
      >
        Узнать наличие
      </Button>

      <Modal open={modal}>
        <CloseIcon
          className="close-btn"
          cursor="pointer"
          onClick={() => setModal(false)}
        />
        <ModalFeedBack />
      </Modal>
    </>
  );
}
