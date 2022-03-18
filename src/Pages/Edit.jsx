import React, { useEffect, useRef, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { getInoviceDetails } from "../mock/mock";
import { GET } from "../shared/httprequest,";
import { InvoiceTemplate } from "../shared/invoiceTemplate";

export const Edit = () => {
    // const [searchParams, setSearchParams] = useSearchParams();
    const [id, setID] = useState("");
    const [invoice, setInvoice] = useState();
    const [loading, setLoading] = useState(false)
    const textboxRef = useRef();

    const getInvoice = (isSearch = false) => {
        const queryParams = new URLSearchParams(window.location.search)
        let invoiceId = isSearch ? id : queryParams.get("id");
        if (invoiceId) {
            setLoading(true);
            setID(invoiceId);
            GET("invoices/" + invoiceId, {}).then(res => {
                setInvoice(getInoviceDetails.invoice);
                setID(invoiceId)
                setLoading(false);
            }).catch(err => {
                console.log(err);
                setLoading(false);
            });
        }
    }

    useEffect(() => {
        getInvoice();
    }, [])
    return (
        <>
            <div className="row print_hide">
                <div className="col-2">
                    <p className="fs-3" style={{ display: 'inline' }}>Edit</p>
                </div>
                <div className="col-10 pt-1">
                    <FormControl
                        ref={textboxRef}
                        style={{ width: '10vw', display: 'inline' }}
                        className={"pl-1"}
                        onChange={(e) => { setID(e.target.value) }}
                        value={id}
                    />
                    <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => {
                            getInvoice(true);
                        }}
                        style={{ display: 'inline' }}
                    >
                        Search </Button>
                </div>
            </div>
            {
                loading &&
                <div>Loading...</div>
            }
            {
                invoice && !loading &&
                <InvoiceTemplate
                    id={invoice.invoice_id}
                    isEdit={true}
                    values={invoice}
                />
            }
        </>
    )
}
