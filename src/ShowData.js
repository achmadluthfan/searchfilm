
import React, { useEffect, useState } from "react";
import DetailData from "./DetailData";

const ShowData = ({ dataSend }) => {

  const [idFilm, setIdFilm] = useState("");
  const [detailData, setDetailData] = useState("");

  const detailsData = document.querySelector('.Details-Data');
  const overlay = document.querySelector('.Overlay');

    document.body.addEventListener('click', function (e) {
      
      if (e.target.classList.contains('card-button')) {
        detailsData.style.opacity = '1';
        detailsData.style.zIndex = '9999';
        overlay.style.display = 'block';
        detailsData.style.top = '100px'
      }


      if (!e.target.classList.contains('Details-Data') && !e.target.classList.contains('Details') && !e.target.classList.contains('card-button') && !e.target.classList.contains('details-overlay')) {
        detailsData.style.top = '60px'
        detailsData.style.opacity = '0';
        detailsData.style.zIndex = '-1';
        overlay.style.display = 'none';
      }
    })

  useEffect( () => {
    fetch(`https://www.omdbapi.com/?apikey=fed84e1b&i=${idFilm}`)
    .then(respone => respone.json())
    .then(result => setDetailData(result))
    .catch(error => alert(error))
  },[idFilm]);

  function detailsHanlde(event) {
    setIdFilm(event.target.getAttribute('data-imdbid'));
  }


  return (
    <div className="details-parent">
      {dataSend.map((data) => {
        return (
          <div className="card" key={data.imdbID}>
            <div className="card-details">
              <img src={data.Poster} alt="" />
              <p className="text-title">{data.Title}</p>
              <p className="text-year">{data.Year}</p>
            </div>
            <button  className="card-button" data-imdbid={data.imdbID} onClick={detailsHanlde}>
              More info
            </button>
          </div>
        );
      })}

      <div className="Details-Data">
        {detailData && <DetailData detailData={detailData}/>}
      </div>

    </div>
  );
};

export default ShowData;

