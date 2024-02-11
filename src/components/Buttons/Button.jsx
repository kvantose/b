import Button from "@mui/material/Button";
import "./Button.css";

export default function ButtonSection({ children, onClick, inActive }) {
  return (
    <div className="btn-outline">
      <Button
        onClick={onClick}
        variant="outlined"
        className={"btn" + (inActive ? " btn-active" : "")}
        sx={{
          color: "white",
          fontSize: "28px",
          fontFamily: "TT Travels",
          border: "3px solid white",
          width: "300px",
          height: "70px",
        }}
      >
        {children}
      </Button>
    </div>
  );
}
