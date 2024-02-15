import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "./Modal";
import {useEffect, useState} from "react";
import ModalFeedBack from "./ModalFeedBack";

export default function ButtonBuy({selectedItems}) {
  const [modal, setModal] = useState(false);
  
  const openModal = () => {
    setModal(true);
  };

  useEffect(()=>console.log(selectedItems), [selectedItems])

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
