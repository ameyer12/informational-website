import React from "react";
import "./climbslide2.css"

function ClimbSlide2() {
  return (
    <div id="climb-slide2">
        <nav id="climb-pagination-container" aria-label="Page navigation example">
            <ul id="climb-pagination" class="pagination">
                <li 
                id="page1" 
                class="page-item"
                onClick={() => {
                    const climbPage1Body = document.getElementById("climb-slide1");
                    const climbPage2Body = document.getElementById("climb-slide2");

                    climbPage2Body.style.display = "none";
                    climbPage1Body.style.display = "block";
                }}
                ><a class="page-link">Mountain 1</a></li>
                <li 
                class="page-item"
                onClick={() => {
                    const climbPage1Body = document.getElementById("climb-slide1");
                    const climbPage2Body = document.getElementById("climb-slide2");

                    climbPage2Body.style.display = "none";
                    climbPage1Body.style.display = "block";
                }}
                ><a class="page-link">Mountain 2</a></li>
            </ul>
        </nav>
        <div className="schedule-container">
            <p className="climb-slide1-p">SCHEDULE</p>
            <ul>
                <li className="slide1-li">23 January 2022<span className="list-events">Vestibulum viverra</span></li>
                <li className="slide1-li">29 January 2022<span className="list-events">Vestibulum viverra</span></li>
                <li className="slide1-li">11 February 2022<span className="list-events">Vestibulum viverra</span></li>
                <li className="slide1-li">19 February 2022<span className="list-events">Vestibulum viverra</span></li>
            </ul>
        </div>
    </div>
  )
}

export default ClimbSlide2;