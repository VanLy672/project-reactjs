import { useState } from "react";
import "../../Asset/CSS/filter.css"
const Filter = () => {
    const [place, setPlace] = useState("");


    const changeHandlerPlace = (e) => {
        setPlace(e.target.value); 
    }

    console.log(place);



    return(
        <div className="filter">
            <div className="filter--search">
                <select className="select" defaultValue = "" onChange={changeHandlerPlace}>
                    <option className="option" disabled selected defaultValue = "">Choose Place</option>
                    <option className="option" value = "Da Nang">Da Nang</option>
                    <option className="option" value = "Binh Dinh">Binh Dinh</option>
                </select>
                <button className="btn btn--primary"> <p className = "btn--text">Find Job</p></button>
            </div>
            <div className="popular--search">
                <button className = "btn popular--search--item" onClick={() =>setPlace("Binh Dinh")}>Binh Dinh</button>
                <button className = "btn popular--search--item" onClick={() =>setPlace("Da Nang")}>Da Nang</button>
                
            </div>
        </div>
    )
}

export default Filter;