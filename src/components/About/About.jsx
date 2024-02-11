import "./About.css";
import CarouselSection from "../Carousel/Carousel.jsx";

export default function About() {
    return (
        <>
            <CarouselSection />
            <div className="title">
                <div className="title-left">
                <p className="text">Мы начали свою деятельность в 2016 году. За это время наша компания  
                набрала большую базу постоянных клиентов, с которыми у нас очень тесные 
                и дружественные отношения. ООО “ДСТ” всегда находит компромисс в решении 
                поставленных задач.
                <br></br>Участие в закупках по ФЗ-223 и ФЗ-44
                </p>
                </div>
            </div>
        </>
    )
}