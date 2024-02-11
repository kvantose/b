import "./Intro.css";
import CarouselSection from "../Carousel/Carousel.jsx";

export default function Intro() {
  return (
    <>
      <CarouselSection />
      <div className="title">
        <div className="title-left">
          <p className="text">
            Мы - профессионалы в сфере доставки рыбы и морепродуктов по всей
            России. Независимо от того, в каком регионе вы находитесь, мы
            обеспечим быструю и надежную доставку прямо к вашей двери. Наша
            компания специализируется на оптовых поставках.У нас широкий 
            ассортимент высококачественной продукции.
          </p>
        </div>
      </div>
    </>
  );
}
