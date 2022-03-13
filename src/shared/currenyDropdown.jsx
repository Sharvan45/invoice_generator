import React from "react";
import { currency_list } from "./constants";


const renderCurrencyOptions = () => {
    return Object.entries(currency_list).map(([key, value]) =>
        <option value={key}>{key + "-" + value}</option>
    );
}
const currencyDropdown = (props) => {
    return (
        <select name="currencyDropdown" id="cars" defaultValue={props.isState ? "State" : "India"}>
            {renderCurrencyOptions()
            }
        </select>);

}

export default currencyDropdown;