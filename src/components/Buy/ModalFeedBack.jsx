import TextField from "@mui/material/TextField";
import "./Buy.css";

export default function ModalFeedBack({ selectedItems }) {
  return (
    <div className="form-container">
      <TextField sx={{ margin: "20px 0px" }} label="Имя:" variant="standard" />
      <TextField
        sx={{ margin: "20px 0px" }}
        label="Телефон:"
        variant="standard"
      />
      <TextField
        sx={{ margin: "20px 0px" }}
        id="standard-multiline-static"
        label="Ваш вопрос:"
        multiline
        rows={7}
        defaultValue={selectedItems ? selectedItems.join(", ") : ""}
        variant="standard"
      />
    </div>
  );
}
