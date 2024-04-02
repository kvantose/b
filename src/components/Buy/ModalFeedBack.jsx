import "./Buy.css";
import "./Modal.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import emailjs from "@emailjs/browser";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function ModalFeedBack({ selectedItems }) {
  const formm = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formm.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          navigate("/", { state: { name: form.name } });
        },
        (error) => {
          navigate("/error", { state: { error: error.text } });
        }
      );
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    question: "",
    checkbox: false,
  });

  useEffect(() => {
    if (form.name && form.phone && form.checkbox) {
      setIsButtonDisabled(false);
    }
  }, [form]);

  return (
    <form ref={formm} onSubmit={sendEmail}>
      <div className="form-container">
        <label style={{ fontSize: "12px" }}>Ваше имя:</label>
        <input
          name="name"
          placeholder="Иван"
          className="modal-input"
          type="text"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <label style={{ fontSize: "12px" }}>Ваш телефон:</label>
        <input
          name="phone"
          placeholder="+7 (900) 123-45-67"
          className="modal-input"
          type="tel"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <label style={{ fontSize: "12px" }}>Ваш вопрос:</label>
        <textarea
          name="message"
          placeholder="Здравствуйте. Хотелось бы узнать по наличию следующих позиций:..."
          className="modal-input-question"
          onChange={(e) => setForm({ ...form, question: e.target.value })}
          required
          rows={100}
          cols={50}
          defaultValue={selectedItems ? selectedItems.join("\n") : ""}
        />
        <FormGroup>
          <FormControlLabel
            onChange={(e) => setForm({ ...form, checkbox: e.target.checked })}
            value={form.checkbox}
            required
            control={<Checkbox />}
            label="Согласен на обработку персональных данных"
            sx={{
              margin: "10px 0px",
              "@media screen and (max-width: 450px)": {
                margin: "5px 0px",
              },
            }}
          />
        </FormGroup>
        <Button
          type="submit"
          value="Send"
          disabled={isButtonDisabled}
          variant="contained"
          sx={{
            marginTop: "30px",
            width: "100%",
            height: "maxContent",
            fontFamily: "TT Travels",
            fontSize: "20px",
            "@media screen and (max-width: 450px)": {
              marginTop: "15px",
              fontSize: "16px",
            },
          }}
        >
          Отправить
        </Button>
      </div>
    </form>
  );
}
