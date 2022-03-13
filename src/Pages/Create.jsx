import React, { useState } from "react";
import { Button, FormControl, Table } from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import CountryStateDropdown from "../shared/CountryStateDropdown";
import currencyDropdown from "../shared/currenyDropdown";
import "./Create.scss";

const renderTotal = (items) => {
    let total = 0;
    let sgst = 0;
    let cgst = 0;
    items.forEach((item) => {
        total += (item.qty * item.rate);
        sgst += ((item.sgst / 100) * (item.qty * item.rate));
        cgst += ((item.sgst / 100) * (item.qty * item.rate));
    })
    return <Table>
        <tbody>
            <tr>
                <td>Sub Total</td>
                <td>{total}</td>
            </tr>
            <tr>
                <td>SGST</td>
                <td>{sgst}</td>
            </tr>
            <tr>
                <td>CGST</td>
                <td>{cgst}</td>
            </tr>
            <tr>
                <td>Total</td>
                <td><currencyDropdown />
                    {total + sgst + cgst}</td>
            </tr>
        </tbody>
    </Table>;
}

const validation = (items) => {
    let errors = [];
    if (!items.ownDetails.companyName) {
        errors.push("ownDetails_name");
    }
    if (!items.clientDetails.clientCompanyName) {
        errors.push("clientDetails_name");
    }
    return errors;
}

const removeFromErrors = (errors, item) => {
}
export const Create = () => {

    const [tableDetails, setTableDetails] = useState([{ itemDescritption: "", HNC: "", qty: 1, sgst: 0, cgst: 0, rate: 0 }])

    const [ownDetails, setOwnDetails] = useState({
        companyName: "",
        name: '',
        companyAddress: '',
        companyGST: '',
        companyCity: "",
        companyState: 'Tamil Nadu',
        companyCountry: 'India',
    });
    const [clientDetails, setClientDetails] = useState({
        clientCompanyName: "",
        clientCompanyAddress: '',
        clientCompanyGST: '',
        clientCompanyCity: "",
        clientCompanyState: 'Tamil Nadu',
        clientCompanyCountry: 'India',
    });

    const [errorList, setErrorList] = useState([]);

    const [headings, setHeading] = useState({ mainHeader: "Tax Invoice" })

    const onOwnChange = (e, field) => {
        setOwnDetails({ ...ownDetails, [field]: e.target.value });
    }

    const onClientChange = (e, field) => {
        setClientDetails({ ...clientDetails, [field]: e.target.value });
    }

    const onSubmitClick = () => {
        let errors = validation({ ownDetails, clientDetails, tableDetails });
        setErrorList(errors);
        if (errors.length === 0) {
        }
    }

    return (
        <>
            <div className="row print_hide">
                <div>
                    <Button
                        variant="outline-primary"
                        size="sm"
                        style={{ float: 'right' }}
                        onClick={() => { onSubmitClick() }}
                    >
                        Save </Button>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <FormControl placeholder="Your Company Name" className="styled"
                        onChange={(e) => onOwnChange(e, "companyName")} />
                    {errorList.includes("ownDetails_name") &&
                        <div className="text-danger">Please enter your company name</div>}
                    <FormControl placeholder="Your Name" className="styled"
                        onChange={(e) => onOwnChange(e, "name")} />
                    <FormControl placeholder="Your Company GSTIN" className="styled"
                        onchange={(e) => onOwnChange(e, "companyGST")} />
                    <FormControl placeholder="Your Company Address" className="styled"
                        onChange={(e) => onOwnChange(e, "companyAddress")} />
                    <FormControl placeholder="City" className="styled"
                        onChange={(e) => onOwnChange(e, "companyCity")} />
                    <CountryStateDropdown isState
                        onChange={(e) => onOwnChange(e, "companyState")}
                        value={ownDetails.companyState} />
                    <br />
                    <CountryStateDropdown
                        onChange={(e) => onOwnChange(e, "companyCountry")}
                        value={ownDetails.companyCountry} />
                </div>
                <div className="col-2"></div>
                <div className="col-6 align-middle" >
                    <h2>
                        <FormControl className="styled mainheader"
                            value={headings.mainHeader}
                            onChange={(e) => setHeading({ ...headings, mainHeader: e.target.value })} />
                    </h2></div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-6" >
                    <h4>Bill To</h4>
                    <FormControl placeholder="Clinet's Company Name" className="styled"
                        onChange={(e) => onClientChange(e, "clientCompanyName")} />
                    {errorList.includes("clientDetails_name") &&
                        <div className="text-danger">Please enter Client company name</div>}
                    <FormControl placeholder="Client's GSTIN" className="styled"
                        onChange={(e) => onClientChange(e, "clientCompanyGST")} />
                    <FormControl placeholder="Client's Address" className="styled"
                        onChange={(e) => onClientChange(e, "clientCompanyAddress")} />
                    <FormControl placeholder="City" className="styled"
                        onChange={(e) => onClientChange(e, "clientCompanyCity")} />
                    <CountryStateDropdown isState
                        onChange={(e) => onClientChange(e, "clientCompanyState")} />
                    <br />
                    <CountryStateDropdown
                        onChange={(e) => onClientChange(e, "clientCompanyCountry")} />
                </div>
                <div className="col-6">
                    <h3>Invoice Details</h3>
                    <div>
                        <Table>
                            <tbody>
                                <tr>
                                    <td>
                                        <FormControl
                                            value="Invoice Number"
                                            className="styled"
                                        /></td>
                                    <td>
                                        <FormControl
                                            placeholder=" Enter Invoice Number"
                                            className="styled"
                                        /></td>
                                </tr>
                                <tr>
                                    <td>
                                        <FormControl
                                            value="Invoice Date"
                                            className="styled"
                                        /></td>
                                    <td>
                                        <DatePicker
                                            selected={new Date()}
                                            className="styled"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <FormControl
                                            value="Due Date"
                                            className="styled"
                                        /></td>
                                    <td>
                                        <DatePicker
                                            selected={new Date()}
                                            className="styled"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            <br />
            <div>Place Of Supply
                <CountryStateDropdown isState />
            </div>
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                <FormControl className="styled" value={"Item Description"} />
                            </th>
                            <th>
                                <FormControl className="styled" value={"Quantity"} />
                            </th>
                            <th>
                                <FormControl className="styled" value={"Rate"} />
                            </th>
                            <th>
                                <FormControl className="styled" value={"SGST"} />
                            </th>
                            <th>
                                <FormControl className="styled" value={"CGST"} />
                            </th>
                            <th>
                                <FormControl className="styled" value={"Amount"} />
                            </th>
                            <th>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableDetails.map((tb, index) => <tr>
                            <td key={tb.itemDescritption + index}>
                                <FormControl className="styled" placeholder={"Item Description"} value={tb.itemDescritption} />
                                <br />
                                <FormControl className="styled" placeholder={"HSN/SGC"} value={tb.HNC} />
                            </td>
                            <td key={tb.itemDescritption + index}>
                                <FormControl className="styled" value={tb.qty} />
                            </td>
                            <td key={tb.itemDescritption + index}>
                                <FormControl className="styled" value={tb.rate} />
                            </td>
                            <td key={tb.itemDescritption + index}>
                                <FormControl className="styled" value={tb.sgst} />
                            </td>
                            <td key={tb.itemDescritption + index}>
                                <FormControl className="styled" value={tb.cgst} />
                            </td>
                            <td key={tb.itemDescritption + index}>
                                <FormControl className="styled" value={tb.qty * tb.rate} />
                            </td>
                            <td key={tb.itemDescritption + index}>
                                Delete
                            </td>
                        </tr>)}
                    </tbody>
                </Table>
                <div>
                    <div className="row">
                        <div className="col-6">Add </div>
                        <div className="col-6">
                            {renderTotal(tableDetails)}
                        </div>
                    </div>
                </div>
            </div>
        </>)
}
