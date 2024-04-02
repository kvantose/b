import { text } from "./data";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import "./Buy.css";
import ButtonBuy from "./ButtonBuy";

export default function CheckboxLabels() {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <>
      <div className="checkbox-container">
        <FormGroup
          sx={{
            fontSize: "20px",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap", // не работает???
            "@media screen and (max-width: 1450px)": {
              fontSize: "16px",
            },
            "@media screen and (max-width: 750px)": {
              flexWrap: "nowrap",
            },
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
                        key={index + "_" + itemIndex}
                        sx={{
                          width: "max-content",
                          padding: "3px",
                          "@media screen and (max-width: 1350px)": {
                            padding: "0",
                            margin: "0",
                          },
                        }}
                        label={
                          <label
                            className="label-checkbox"
                            htmlFor={"chk_" + index + "_" + itemIndex}
                          >
                            {description}
                          </label>
                        }
                        control={
                          <Checkbox
                            key={index + "_" + itemIndex}
                            id={"chk_" + index + "_" + itemIndex}
                            sx={{
                              padding: "10px",
                              color: "grey",
                              "& .MuiSvgIcon-root": { fontSize: "20px" },
                              "@media screen and (max-width: 1350px)": {
                                padding: "6.5px",
                              },
                            }}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedItems([
                                  ...selectedItems,
                                  description,
                                ]);
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
      <ButtonBuy selectedItems={selectedItems} />
    </>
  );
}
