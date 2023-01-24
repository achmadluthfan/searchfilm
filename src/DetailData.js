import React from "react";

const DetailData = ({detailData}) => {

    const data = [detailData];
    return ( 
        <div >
            {data.map(data => {
            return (
                <div className="Details">
                <img src={data.Poster} alt="" />
                <table border="1">
                    <tbody>
                        <tr>
                            <th >Released</th>
                            <td> {data.Released}</td>
                        </tr>
                        <tr>
                            <th>Duration</th>
                            <td> {data.Runtime}</td>
                        </tr>
                        <tr>
                            <th>Plot</th>
                            <td> {data.Plot}</td>
                        </tr>
                        <tr>
                            <th>IMDB Rating</th>
                            <td> {data.imdbRating}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            )
          })}
          <div className="details-overlay"></div>
        </div>
     );
}
 
export default DetailData;

