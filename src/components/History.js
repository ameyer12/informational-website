import React from "react";
import "./history.css";
import slide1 from "./pexels-oziel-gómez-868097.jpg";
import slide2 from "./pexels-eric-sanman-1365425.jpg";
import slide3 from "./pexels-oziel-gómez-840667.jpg";
import slide4 from "./pexels-flo-maderebner-869258.jpg";
import slide5 from "./pexels-भोलेनाथ-भक्त-1178784.jpg";

function History() {
  return (
    <div id="history-body">
        <p className="history-p"></p>
        <div id="carousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carousel" data-slide-to="0" class="active"></li>
            <li data-target="#carousel" data-slide-to="1"></li>
            <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img id="slide1-image" class="d-block w-100" src={slide1} alt="First slide"/>
            </div>
            <div class="carousel-item">
            <img id="slide2-image" class="d-block w-100" src={slide2} alt="Second slide"/>
            </div>
            <div class="carousel-item">
            <img id="slide3-image" class="d-block w-100" src={slide3} alt="Third slide"/>
            </div>
            <div class="carousel-item">
            <img id="slide4-image" class="d-block w-100" src={slide4} alt="Fourth slide"/>
            </div>
            <div class="carousel-item">
            <img id="slide5-image" class="d-block w-100" src={slide5} alt="Fourth slide"/>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
        </div>
    </div>
  )
}

export default History;