import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import { Route, Routes, useLocation, useNavigation } from "react-router-dom";
import Button from "./components/Buttons/Button";
import { useNavigate } from "react-router-dom";
import Intro from "./components/Intro/Intro.jsx";
import About from "./components/About/About.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import CheckboxLabels from "./components/Buy/CheckBoxHandler.jsx";

export default function App() {
  const [tab, setTab] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setTab(location.pathname.trimStart("/"));
    }
  }, []);

  useEffect(() => {
    navigate(tab);
  }, [tab]);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="main-container">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="buy" element={<CheckboxLabels />} />
        </Routes>

        <div className="buttons-grid">
          <Button inActive={tab == ""} onClick={() => setTab("")}>
            Главная
          </Button>
          <Button inActive={tab == "about"} onClick={() => setTab("about")}>
            О нас
          </Button>
          <Button
            inActive={tab == "contacts"}
            onClick={() => setTab("contacts")}
          >
            Контакты
          </Button>
          <Button inActive={tab == "buy"} onClick={() => setTab("buy")}>
            Купить
          </Button>
        </div>
        </div>
      </main>
    </>
  );
}
