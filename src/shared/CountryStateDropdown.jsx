import React from "react";
import { countryList, state } from "./constants";

import "./countryStateDropdown.scss";



const CountryStateDropdown = (props) => {
    return (
        <select name="CountryStateDropdown" className="countryStateDropdown"
            id="cars"
            value={props.value}
            onChange={props.onChange}>
            {props.isState ?
                state.map((st) =>
                    <option value={st}>{st}</option>) :
                countryList.map((ct) => <option value={ct}>{ct}</option>)
            }
        </select>);

}

export default CountryStateDropdown;