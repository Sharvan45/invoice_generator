import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import { Table } from "react-bootstrap";
import { mockInvoiceList } from "../mock/mock";
import { GET } from "../shared/httprequest,";

export const List = () => {

    useEffect(() => {
        GET("invoices", {}).then(res => {
            setInvoiceList(mockInvoiceList.invoices);
        }).catch(err => {
            // for demo purpose
            setInvoiceList(mockInvoiceList.invoices);
        })
    });

    const [invoiceList, setInvoiceList] = useState([]);

    return (
        <>
            <h3>List of Invoices</h3>
            <Table>
                <thead>
                    <th>
                        Invoice Number
                    </th>
                    <th>
                        Company Name
                    </th>
                    <th>
                        Status
                    </th>
                    <th>
                        Date
                    </th>
                    <th>
                        Due Date
                    </th>
                    <th>
                        Total
                    </th>
                    <th>
                        Balance
                    </th>
                </thead>
                <tbody>
                    {invoiceList.length === 0 ?
                        "No Invoices" :
                        invoiceList.map(invoice => (
                            <tr key={invoice.invoice_id}>
                                <td><>
                                    <NavLink to="/edit">{invoice.invoice_number}</NavLink></></td>
                                <td>{invoice.customer_name} </td>
                                <td>{invoice.status}</td>
                                <td>{invoice.date}</td>
                                <td>{invoice.due_date}</td>
                                <td>{`(${invoice.currency_code}) ${invoice.total}`}</td>
                                <td>{`(${invoice.currency_code}) ${invoice.balance}`}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </>
    )
}
