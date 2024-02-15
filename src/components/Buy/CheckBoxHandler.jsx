import { text } from "./data";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import "./Buy.css";
import ButtonBuy from "./ButtonBuy";

export default function CheckboxLabels() {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);

  return (
    <div className="checkbox-container">
      <FormGroup
        sx={{
          fontSize: "20px",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        {text.map(({ title, items }, index) => {
          return (
            <>
              <span style={{ margin: "10px 0px 10px 0px" }} key={index}>
                {title}
              </span>
              {items.map(({ description }, itemIndex) => {
                return (
                  <>
                    <FormControlLabel
                      sx={{ width: "max-content", padding: "3px" }}
                      key={index + "_" + itemIndex}
                      label={
                        <label
                          htmlFor={"chk_" + index + "_" + itemIndex}
                          style={{ fontSize: "20px", cursor: "pointer" }}
                        >
                          {description}
                        </label>
                      }
                      control={
                        <Checkbox
                          id={"chk_" + index + "_" + itemIndex}
                          sx={{
                            padding: "10px",
                            "& .MuiSvgIcon-root": { fontSize: "20px" },
                          }}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedItems([...selectedItems, description]);
                            } else {
                              setSelectedItems(
                                selectedItems.filter(
                                  (item) => item !== description
                                )
                              );
                            }
                          }}
                        />
                      }
                    />
                  </>
                );
              })}
            </>
          );
        })}
      </FormGroup>
      <ButtonBuy />
    </div>
  );
}
