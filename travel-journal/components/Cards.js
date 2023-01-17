import React from "react"


export default function Cards (props){
    return(
        <section className="card">
            <img src={props.imageUrl} className="card--img" />
            <div className="card--text">
                <div className="location">
                    <img src="../logos/location-logo-vector-13.png" className="location--logo" />
                    <span className="country">{props.location.toUpperCase()}</span>
                    <span><a href={props.googleMapsUrl}>View on Google Maps</a></span>
                </div>
                    <h2 className="title">{props.title}</h2>
                    <p className="date">{props.startDate} - {props.endDate}</p>
                    <p className="description">{props.description}</p>
            </div>
        </section>
    )
}