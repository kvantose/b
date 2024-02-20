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
          "@media screen and (max-width: 900px)": {
            width: "200px",
            height: "50px",
            fontSize: "20px",
          },
          "@media screen and (max-width: 600px)": {
            width: "150px",
            height: "40px",
            fontSize: "16px",
          }, 
        }}
      >
        {children}
      </Button>
    </div>
  );
}
