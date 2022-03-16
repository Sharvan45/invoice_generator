export const convertModelToFormData = (model) => {
    return {
        "customer_id": 982000000567001,
        "contact_persons": [model?.ownDetails?.name],
        "invoice_number": "INV-00003",
        "reference_number": " ",
        "place_of_supply": "TN",
        "gst_treatment": "business_gst",
        "gst_no": "22AAAAA0000A1Z5",
        "template_id": 982000000000143,
        "date": "2013-11-17",
        "payment_terms": 15,
        "payment_terms_label": "Net 15",
        "due_date": "2013-12-03",
        "discount": 0,
        "is_discount_before_tax": true,
        "discount_type": "item_level",
        "is_inclusive_tax": false,
        "exchange_rate": 1,
        "recurring_invoice_id": " ",
        "invoiced_estimate_id": " ",
        "salesperson_name": " ",
        "custom_fields": [],
        "project_id": 90300000087378,
        "line_items": [
            {
                "item_id": 982000000030049,
                "project_id": 90300000087378,
                "time_entry_ids": [
                    {}
                ],
                "expense_id": " ",
                "name": "Hard Drive",
                "product_type": "goods",
                "hsn_or_sac": 80540,
                "item_order": 1,
                "rate": 120,
                "quantity": 1,
                "unit": " ",
                "discount": 0,
                "tax_id": 982000000557028,
                "tax_exemption_id": 11149000000061054,
                "tax_name": "VAT",
                "tax_type": "tax",
                "tax_percentage": 12.5,
                "item_total": 120
            }
        ],
        "payment_options": {
            "payment_gateways": [
                {
                    "configured": true,
                    "additional_field1": "standard",
                    "gateway_name": "paypal"
                }
            ]
        },
        "allow_partial_payments": true,
        "custom_body": " ",
        "custom_subject": " ",
        "notes": "Looking forward for your business.",
        "terms": "Terms & Conditions apply",
        "shipping_charge": 0,
        "adjustment": 0,
        "adjustment_description": " ",
        "reason": " ",
        "tax_authority_id": 11149000000061052,
        "tax_exemption_id": 11149000000061054
    }
}

export const convertInvoiceToData = (model) => {
    return ({
        ownDetails: {
            companyName: "My Company",
            name: model?.contact_persons[0]?.first_name,
            companyAddress: model?.billing_address.address,
            companyGST: "22AAAAA0000A1Z2",
            companyCity: model?.billing_address.city,
            companyState: model?.billing_address.state,
            companyCountry: model?.billing_address.country,
        },
        clientDetails: {
            clientCompanyName: model?.customer_name,
            clientCompanyAddress: model?.shipping_address.city,
            clientCompanyGST: model?.gst_no,
            clientCompanyCity: model?.shipping_address.city,
            clientCompanyState: model?.shipping_address.state,
            clientCompanyCountry: model?.shipping_address.country,
            supplyState: model?.place_of_supply
        },
        invoiceDetails: {
            invoiceNumber: model?.invoice_number,
            invoiceDate: new Date(model?.date),
            dueDate: new Date(model?.due_date),
        },
        tableDetails: model?.line_items?.map((item) => (
            {
                itemDescritption: item?.name, HNC: "", qty: item?.quantity, sgst: item.tax_percentage / 2, cgst: item.tax_percentage / 2,
                rate: item.rate
            })
        ),
        footer: {
            notes: model?.notes,
            tac: model?.terms
        },
    });

};



