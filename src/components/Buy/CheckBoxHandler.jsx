import { text } from "./data";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import "./Buy.css";

export default function CheckboxLabels() {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);

  return (
    <div className="checkbox-container">
      <FormGroup sx={{ fontSize: "30px", height: '100%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
        {text.map(({ title, items }, index) => {
          return (
            <>
              <span key={index}>{title}</span>
              {items.map(({ description }, itemIndex) => {
                return (
                  <>
                    <FormControlLabel
                      sx={{ fontSize: "30px", width: "max-content" }}
                      key={index + "_" + itemIndex}
                      label={
                        <label
                          htmlFor={"chk_" + index + "_" + itemIndex}
                          style={{ fontSize: "30px", cursor: "pointer" }}
                        >
                          {description}
                        </label>
                      }
                      control={
                        <Checkbox
                          id={"chk_" + index + "_" + itemIndex}
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: "30px" },
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
    </div>
  );
}
