import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function TabsSection({ active, onChange }) {
  const navigate = useNavigate();

  return (
      <>
        <Button inActive={active == "home"} onClick={() => navigate("")}>
          Главная
        </Button>
        <Button inActive={active == "about"} onClick={() => navigate("about")}>
          О нас
        </Button>
        <Button
          inActive={active == "contacts"}
          onClick={() => navigate("contacts")}
        >
          Контакты
        </Button>
        <Button inActive={active == "buy"} onClick={() => navigate("buy")}>
          Купить
        </Button>
      </>
  );
}
