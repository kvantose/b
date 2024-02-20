import TextField from "@mui/material/TextField";
import "./Buy.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Maximize } from "@mui/icons-material";

export default function ModalFeedBack({ selectedItems }) {
  return (
    <div className="form-container">
      <TextField
        required
        sx={{ margin: "20px 0px" }}
        label="Имя"
        variant="standard"
      />
      <TextField
        value="(___)___-__-__"
        pattern="^(?[0-9]{3})?(s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$"
        required
        sx={{ margin: "30px 0px" }}
        label="Телефон"
        variant="standard"
      />
      <TextField
        sx={{ margin: "20px 0px" }}
        id="standard-multiline-static"
        label="Ваш вопрос:"
        multiline
        rows={10}
        defaultValue={selectedItems ? selectedItems.join("\n") : ""}
      />
      <FormGroup>
        <FormControlLabel
          sx={{ margin: "10px 0px" }}
          required
          control={<Checkbox />}
          label="Согласен на обработку персональных данных"
        />
      </FormGroup>
      <Button
        variant="contained"
        sx={{
          marginTop: "30px",
          width: "100%",
          height: "maxContent",
          fontFamily: "TT Travels",
          fontSize: "20px",
        }}
      >
        Отправить
      </Button>
    </div>
  );
}
