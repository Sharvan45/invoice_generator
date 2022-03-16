import React, { useEffect, useRef, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { getInoviceDetails } from "../mock/mock";
import { GET } from "../shared/httprequest,";
import { InvoiceTemplate } from "../shared/invoiceTemplate";

export const Edit = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [id, setID] = useState("");
    const [invoice, setInvoice] = useState({});

    const textboxRef = useRef();

    useEffect(() => {
        let id = searchParams.get("id");
        if (id) {
            setID(id);
            GET("invoices/" + id, {}).then(res => {
                setInvoice(getInoviceDetails.invoice);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [searchParams])
    return (
        <>
            <div className="row print_hide">Edit -{id}
                <FormControl
                    ref={textboxRef}
                /> <Button
                    variant="outline-primary"
                    size="sm"
                    style={{ float: 'right' }}
                    onClick={() => { console.log(textboxRef.current.value); }}
                >
                    Search </Button></div>
            {invoice &&
                <InvoiceTemplate
                    id={invoice.invoice_id}
                    isEdit={true}
                    values={invoice}
                />
            }
        </>
    )
}
