import React from "react";
import "./climbslide1.css"

function ClimbSlide1() {
  return (
    <div id="climb-slide1">
        <nav id="climb-pagination-container" aria-label="Page navigation example">
            <ul id="climb-pagination" class="pagination">
                <li 
                id="page1" 
                class="page-item"
                onClick={() => {
                    const climbPage1Body = document.getElementById("climb-slide1");
                    const climbPage2Body = document.getElementById("climb-slide2");

                    climbPage1Body.style.display = "block";
                    climbPage2Body.style.display = "none";
                }}
                ><a class="page-link">Mountain 1</a></li>
                <li 
                class="page-item"
                onClick={() => {
                    const climbPage1Body = document.getElementById("climb-slide1");
                    const climbPage2Body = document.getElementById("climb-slide2");

                    climbPage1Body.style.display = "none";
                    climbPage2Body.style.display = "block";
                }}
                ><a class="page-link">Mountain 2</a></li>
            </ul>
        </nav>
        <div className="schedule-container">
            <p className="climb-slide1-p">SCHEDULE</p>
            <ul>
                <li className="slide1-li">25 January 2022<span className="list-events">Vestibulum viverra</span></li>
                <li className="slide1-li">30 January 2022<span className="list-events">Vestibulum viverra</span></li>
                <li className="slide1-li">6 February 2022<span className="list-events">Vestibulum viverra</span></li>
                <li className="slide1-li">17 February 2022<span className="list-events">Vestibulum viverra</span></li>
            </ul>
        </div>
    </div>
  )
}

export default ClimbSlide1;