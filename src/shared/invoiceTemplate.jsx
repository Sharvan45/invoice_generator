import { useState } from "react"
import { Button, FormControl, Table } from "react-bootstrap";
import DatePicker from "react-datepicker";

import { convertModelToFormData } from "./convertors";
import CountryStateDropdown from "./CountryStateDropdown";
import { POST } from "./httprequest,";
import "react-datepicker/dist/react-datepicker.css";
import "./invoiceTemplate.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { invoiceDetailsTemplate } from "./constants";

const renderTotal = (items) => {
    let total = 0;
    let sgst = 0;
    let cgst = 0;
    items.forEach((item) => {
        total += (item.qty * item.rate);
        sgst += ((item.sgst / 100) * (item.qty * item.rate));
        cgst += ((item.cgst / 100) * (item.qty * item.rate));
    })
    return <Table>
        <tbody>
            <tr>
                <td>Sub Total</td>
                <td>{total.toFixed(2)}</td>
            </tr>
            <tr>
                <td>SGST</td>
                <td>{sgst.toFixed(2)}</td>
            </tr>
            <tr>
                <td>CGST</td>
                <td>{cgst.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Total</td>
                <td><currencyDropdown />
                    {(total + sgst + cgst).toFixed(2)}</td>
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
    let index = errors.indexOf(item);
    errors.splice(index, 1);
    return errors
}
const findEmpty = (value) => value ? "" : "print_hide "

export const InvoiceTemplate = () => {
    const [tableDetails, setTableDetails] =
        useState([{ itemDescritption: "", HNC: "", qty: 1, sgst: 0, cgst: 0, rate: 0 }])

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
        supplyState: "Tamil Nadu"
    });

    const [invoiceDetails, setInvoiceDetails] = useState({
        invoiceNumber: "Invoice-",
        dueDate: new Date(),
        invoiceDate: new Date(),
    });

    const [errorList, setErrorList] = useState([]);

    const [headings, setHeading] = useState({
        mainHeader: "Tax Invoice",
        invoice_1: "Invoice Number",
        invoice_2: "Invoice Date",
        invoice_3: "Due Date",
        table_1: "Item Description",
        table_2: "Quantity",
        table_3: "Rate",
        table_4: "Amount",
        footer_1: "Notes",
        footer_2: "Terms & Conditions",
    });

    const [footer, setFooter] = useState({
        notes: "It was great doing business with you.",
        tac: "Please make the payment by the due date."
    })

    const onOwnChange = (e, field) => {
        switch (field) {
            case "companyName":
                removeFromErrors(errorList, "ownDetails_name");
                setTableDetails([...tableDetails]);
                break;
            default:
                break;
        }
        setOwnDetails({ ...ownDetails, [field]: e.target.value });
    }

    const onClientChange = (e, field) => {
        switch (field) {
            case "clientCompanyName":
                removeFromErrors(errorList, "clientDetails_name");
                break;
            default:
                break;
        }
        setClientDetails({ ...clientDetails, [field]: e.target.value });
    }

    const onSubmitClick = () => {
        let errors = validation({ ownDetails, clientDetails, tableDetails });
        setErrorList(errors);
        if (errors.length === 0) {
            POST("invoices", convertModelToFormData({ ownDetails, clientDetails, tableDetails }))
        }
    }

    const onItemTableChange = (e, index, field) => {
        let items = [...tableDetails];
        items[index][field] = e.target.value;
        setTableDetails(items);
    }

    const onDeleteItem = (index) => {
        if (tableDetails.length > 1) {
            let items = [...tableDetails];
            items.splice(index, 1);
            setTableDetails(items);
        }
    }

    const onAddItem = () => {
        let items = [...tableDetails];
        items.push(invoiceDetailsTemplate);
        setTableDetails(items);
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
                    <Button
                        variant="outline-primary"
                        size="sm"
                        style={{ float: 'right' }}
                        onClick={() => { window.print() }}
                    >
                        Print </Button>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <FormControl placeholder="Your Company Name" className={findEmpty(ownDetails.companyName) +
                        "styled"}
                        onChange={(e) => onOwnChange(e, "companyName")} />
                    {errorList.includes("ownDetails_name") &&
                        <div className="text-danger">Please enter your company name</div>}
                    <FormControl placeholder="Your Name" className={findEmpty(ownDetails.name) + "styled"}
                        onChange={(e) => onOwnChange(e, "name")} />
                    <FormControl placeholder="Your Company GSTIN"
                        className={findEmpty(ownDetails.companyGST) + "styled"}
                        onchange={(e) => onOwnChange(e, "companyGST")} />
                    <FormControl placeholder="Your Company Address"
                        className={findEmpty(ownDetails.companyAddress) + "styled"}
                        onChange={(e) => onOwnChange(e, "companyAddress")} />
                    <FormControl placeholder="City"
                        className={findEmpty(ownDetails.companyCity) + "styled"}
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
                <div className="col-4" >
                    <h4>Bill To</h4>
                    <FormControl placeholder="Clinet's Company Name"
                        className={findEmpty(clientDetails.clientCompanyName) + "styled"}
                        onChange={(e) => onClientChange(e, "clientCompanyName")} />
                    {errorList.includes("clientDetails_name") &&
                        <div className="text-danger">Please enter Client company name</div>}
                    <FormControl placeholder="Client's GSTIN" className={findEmpty(clientDetails.clientCompanyGST) + "styled"}
                        onChange={(e) => onClientChange(e, "clientCompanyGST")} />
                    <FormControl placeholder="Client's Address" className={findEmpty(clientDetails.clientCompanyAddress) + "styled"}
                        onChange={(e) => onClientChange(e, "clientCompanyAddress")} />
                    <FormControl placeholder="City" className={findEmpty(clientDetails.clientCompanyCity) + "styled"}
                        onChange={(e) => onClientChange(e, "clientCompanyCity")} />
                    <CountryStateDropdown isState
                        onChange={(e) => onClientChange(e, "clientCompanyState")}
                        value={clientDetails.clientCompanyState} />
                    <br />
                    <CountryStateDropdown
                        onChange={(e) => onClientChange(e, "clientCompanyCountry")}
                        value={clientDetails.clientCompanyCountry} />
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <h3>Invoice Details</h3>
                    <div>
                        <Table className="invoiceTable">
                            <tbody>
                                <tr>
                                    <td>
                                        <FormControl
                                            value={headings.invoice_1}
                                            className="styled"
                                            onChange={(e) => setHeading({ ...headings, invoice_1: e.target.value })} />
                                    </td>
                                    <td>
                                        <FormControl
                                            placeholder="Enter Invoice Number"
                                            className="styled"
                                            value={invoiceDetails.invoiceNumber}
                                            onChange={(e) => setInvoiceDetails({ ...invoiceDetails, invoiceNumber: e.target.value })} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <FormControl
                                            value={headings.invoice_2}
                                            className="styled"
                                            onChange={(e) => setHeading({ ...headings, invoice_2: e.target.value })} />
                                    </td>
                                    <td>
                                        <DatePicker
                                            selected={invoiceDetails.invoiceDate}
                                            className="styled custom_padding"
                                            onChange={(e) => setInvoiceDetails({ ...invoiceDetails, invoiceDate: e })} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <FormControl
                                            value={headings.invoice_3}
                                            className="styled"
                                            onChange={(e) => setHeading({ ...headings, invoice_3: e.target.value })} />
                                    </td>
                                    <td>
                                        <DatePicker
                                            selected={invoiceDetails.dueDate}
                                            className="styled custom_padding"
                                            onChange={(e) => setInvoiceDetails({ ...invoiceDetails, dueDate: e })} />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            <br />
            <div className="col-4">Place Of Supply
                <CountryStateDropdown isState
                    value={clientDetails.supplyState}
                    onChange={(e) => setClientDetails({ ...clientDetails, supplyState: e })} />
            </div>
            <div>
                <Table>
                    <thead className="itemTable">
                        <tr>
                            <th>
                                <FormControl className="styled" value={headings.table_1}
                                    onChange={(e) => setHeading({ ...headings, table_1: e.target.value })} />
                            </th>
                            <th>
                                <FormControl className="styled" value={headings.table_2}
                                    onChange={(e) => setHeading({ ...headings, table_2: e.target.value })} />
                            </th>
                            <th>
                                <FormControl className="styled" value={headings.table_3}
                                    onChange={(e) => setHeading({ ...headings, table_3: e.target.value })} />
                            </th>
                            <th>
                                <div>{"SGST"} </div >
                            </th>
                            <th>
                                <div>{"CGST"} </div >
                            </th>
                            <th>
                                <FormControl className="styled" value={headings.table_4}
                                    onChange={(e) => setHeading({ ...headings, table_4: e.target.value })} />
                            </th>
                            <th className="print_hide">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableDetails.map((tb, index) => <tr>
                            <td key={tb.itemDescritption + index}>
                                <FormControl className="styled"
                                    placeholder={"Item Description"}
                                    onChange={(e) => onItemTableChange(e, index, "itemDescritption")}
                                    value={tb.itemDescritption} />
                                <br />
                                {/* <FormControl className="styled"
                                    onChange={(e) => onItemTableChange(e, index, "HSN")}
                                    placeholder={"HSN/SGC"} value={tb.HNC} /> */}
                            </td>
                            <td key={tb.itemDescritption + index}>
                                <FormControl className="styled" value={tb.qty}
                                    onChange={(e) => onItemTableChange(e, index, "qty")}
                                    type="number" />
                            </td>
                            <td key={tb.itemDescritption + index}>
                                <FormControl className="styled" value={tb.rate}
                                    type="number"
                                    onChange={(e) => onItemTableChange(e, index, "rate")} />
                            </td>
                            <td key={tb.itemDescritption + index}>
                                <FormControl className="styled" value={tb.sgst}
                                    type="number"
                                    onChange={(e) => onItemTableChange(e, index, "sgst")} />
                            </td>
                            <td key={tb.itemDescritption + index}>
                                <FormControl className="styled" value={tb.cgst}
                                    type="number"
                                    onChange={(e) => onItemTableChange(e, index, "cgst")} />
                            </td>
                            <td key={tb.itemDescritption + index}>
                                <div className="styled" >{tb.qty * tb.rate}
                                </div>
                            </td>
                            <td key={tb.itemDescritption + index} className="print_hide">
                                <FontAwesomeIcon icon={faTrash}
                                    onClick={() => onDeleteItem(index)} />
                            </td>
                        </tr>)}
                    </tbody>
                </Table>
                <div>
                    <div className="row">
                        <div className="col-6">
                            <div className="print_hide"><FontAwesomeIcon icon={faPlus}
                                onClick={() => onAddItem()} />
                                Add</div> </div>
                        <div className="col-6">
                            {renderTotal(tableDetails)}
                        </div>
                    </div>
                </div>
                <div>
                    <h5><FormControl className="styled fw-bold" value={headings.footer_1}
                        onChange={(e) => setHeading({ ...headings, footer_1: e.target.value })} /></h5>
                    <div>
                        <FormControl className="styled" value={footer.notes}
                            as="textarea"
                            row={3}
                            onChange={(e) => setFooter({ ...footer, notes: e.target.value })} />
                    </div>
                </div>
                <br />
                <div>
                    <h5><FormControl className="styled fw-bold" value={headings.footer_2}
                        onChange={(e) => setHeading({ ...headings, footer_2: e.target.value })} /></h5>
                    <div>
                        <FormControl className="styled" value={footer.tac}
                            as="textarea"
                            row={3}
                            onChange={(e) => setFooter({ ...footer, tac: e.target.value })} />
                    </div>
                </div>
            </div>
        </>)
}
