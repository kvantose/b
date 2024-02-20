import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import "./Carousel.css";

export default function CarouselSection(props) {
  var items = [
    {
      img: "../../../img/1.jpg",
    },
    {
      img: "../../../img/2.jpg",
    },
    {
      img: "../../../img/3.jpg",
    },
  ];

  return (
    <div className="carousel-container">
      <Carousel
        className="carousel"
        interval={3000}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props) {
  return (
    <Paper
      sx={{
        overflow: "hidden",
        "@media screen and (max-width: 900px)": {
          width: "600px",
          height: "400px",
        },
        "@media screen and (max-width: 600px)": {
          width: "400px",
          height: "300px",
        }, 
        "@media screen and (max-width: 400px)": {
          width: "300px",
          height: "200px",
        }
      }}
    >
      <img src={props.item.img}></img>
    </Paper>
  );
}
