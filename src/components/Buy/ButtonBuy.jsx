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
          margin: "30px 0px 30px 0px",
          width: "400px",
          height: "100px",
          fontSize: "28px",
          fontFamily: "TT Travels",
          "@media screen and (max-width: 900px)": {
            width: "200px",
            height: "50px",
            fontSize: "18px",
          },
          "@media screen and (max-width: 600px)": {
            width: "150px",
            height: "40px",
            fontSize: "14px",
          }, 
      }}
      >
        Узнать о наличии
      </Button>

      <Modal open={modal}>
        <CloseIcon
          sx={{}}
          className="close-btn"
          cursor="pointer"
          onClick={() => setModal(false)}
        />
        <ModalFeedBack selectedItems={selectedItems}/>
      </Modal>
    </>
  );
}
