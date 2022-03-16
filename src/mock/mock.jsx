// const mockPost = {
//     "customer_id": 982000000567001,
//     "contact_persons": [
//         "982000000870911",
//         "982000000870915"
//     ],
//     "invoice_number": "INV-00003",
//     "reference_number": " ",
//     "place_of_supply": "TN",
//     "gst_treatment": "business_gst",
//     "gst_no": "22AAAAA0000A1Z5",
//     "template_id": 982000000000143,
//     "date": "2013-11-17",
//     "payment_terms": 15,
//     "payment_terms_label": "Net 15",
//     "due_date": "2013-12-03",
//     "discount": 0,
//     "is_discount_before_tax": true,
//     "discount_type": "item_level",
//     "is_inclusive_tax": false,
//     "exchange_rate": 1,
//     "recurring_invoice_id": " ",
//     "invoiced_estimate_id": " ",
//     "salesperson_name": " ",
//     "custom_fields": [
//         {
//             "label": "Record Number",
//             "value": 23
//         }
//     ],
//     "project_id": 90300000087378,
//     "line_items": [
//         {
//             "item_id": 982000000030049,
//             "project_id": 90300000087378,
//             "time_entry_ids": [
//                 {}
//             ],
//             "expense_id": " ",
//             "name": "Hard Drive",
//             "product_type": "goods",
//             "hsn_or_sac": 80540,
//             "item_order": 1,
//             "rate": 120,
//             "quantity": 1,
//             "unit": " ",
//             "discount": 0,
//             "tax_id": 982000000557028,
//             "tax_exemption_id": 11149000000061054,
//             "tax_name": "VAT",
//             "tax_type": "tax",
//             "tax_percentage": 12.5,
//             "item_total": 120
//         }
//     ],
//     "payment_options": {
//         "payment_gateways": [
//             {
//                 "configured": true,
//                 "additional_field1": "standard",
//                 "gateway_name": "paypal"
//             }
//         ]
//     },
//     "allow_partial_payments": true,
//     "custom_body": " ",
//     "custom_subject": " ",
//     "notes": "Looking forward for your business.",
//     "terms": "Terms & Conditions apply",
//     "shipping_charge": 0,
//     "adjustment": 0,
//     "adjustment_description": " ",
//     "reason": " ",
//     "tax_authority_id": 11149000000061052,
//     "tax_exemption_id": 11149000000061054
// }

export const mockInvoiceList = {
    "code": 0,
    "message": "success",
    "invoices": [
        {
            "invoice_id": 982000000567114,
            "ach_payment_initiated": false,
            "customer_name": "Bowman & Co",
            "customer_id": 982000000567001,
            "status": "draft",
            "invoice_number": "INV-00003",
            "reference_number": " ",
            "date": "2013-11-17",
            "due_date": "2013-12-03",
            "due_days": "Due in 14 day(s)",
            "currency_id": 982000000000190,
            "schedule_time": "",
            "currency_code": "USD",
            "is_viewed_by_client": false,
            "has_attachment": false,
            "client_viewed_time": "",
            "total": 40.6,
            "balance": 40.6,
            "created_time": "2013-11-17T02:17:40-0800",
            "last_modified_time": "2013-12-18T02:02:51-0800",
            "is_emailed": false,
            "reminders_sent": 1,
            "last_reminder_sent_date": " ",
            "payment_expected_date": " ",
            "last_payment_date": " ",
            "custom_fields": [
                {
                    "customfield_id": 439910000000236000,
                    "data_type": "number",
                    "index": 1,
                    "label": "Record Number",
                    "show_on_pdf": true,
                    "show_in_all_pdf": true,
                    "value": 23
                }
            ],
            "documents": "",
            "salesperson_id": " ",
            "salesperson_name": " ",
            "shipping_charge": 0,
            "adjustment": 0,
            "write_off_amount": 0,
            "exchange_rate": 1
        },
        {
            "invoice_id": 982000000567115,
            "ach_payment_initiated": false,
            "customer_name": "Bowman & Co",
            "customer_id": 982000000567001,
            "status": "draft",
            "invoice_number": "INV-00003",
            "reference_number": " ",
            "date": "2013-11-17",
            "due_date": "2013-12-03",
            "due_days": "Due in 14 day(s)",
            "currency_id": 982000000000190,
            "schedule_time": "",
            "currency_code": "USD",
            "is_viewed_by_client": false,
            "has_attachment": false,
            "client_viewed_time": "",
            "total": 40.6,
            "balance": 40.6,
            "created_time": "2013-11-17T02:17:40-0800",
            "last_modified_time": "2013-12-18T02:02:51-0800",
            "is_emailed": false,
            "reminders_sent": 1,
            "last_reminder_sent_date": " ",
            "payment_expected_date": " ",
            "last_payment_date": " ",
            "custom_fields": [
                {
                    "customfield_id": 439910000000236000,
                    "data_type": "number",
                    "index": 1,
                    "label": "Record Number",
                    "show_on_pdf": true,
                    "show_in_all_pdf": true,
                    "value": 23
                }
            ],
            "documents": "",
            "salesperson_id": " ",
            "salesperson_name": " ",
            "shipping_charge": 0,
            "adjustment": 0,
            "write_off_amount": 0,
            "exchange_rate": 1
        },]
}

export const getInoviceDetails = {
    "code": 0,
    "message": "success",
    "invoice": {
        "invoice_id": 982000000567114,
        "ach_payment_initiated": false,
        "invoice_number": "INV-00003",
        "is_pre_gst": true,
        "place_of_supply": "TN",
        "gst_no": "22AAAAA0000A1Z5",
        "gst_treatment": "business_gst",
        "date": "2013-11-17",
        "status": "draft",
        "payment_terms": 15,
        "payment_terms_label": "Net 15",
        "due_date": "2013-12-03",
        "payment_expected_date": " ",
        "last_payment_date": " ",
        "reference_number": " ",
        "customer_id": 982000000567001,
        "customer_name": "Bowman & Co",
        "contact_persons": [
            "982000000870911",
            "982000000870915"
        ],
        "currency_id": 982000000000190,
        "currency_code": "USD",
        "exchange_rate": 1,
        "discount": 0,
        "is_discount_before_tax": true,
        "discount_type": "item_level",
        "is_inclusive_tax": false,
        "recurring_invoice_id": " ",
        "is_viewed_by_client": false,
        "has_attachment": false,
        "client_viewed_time": "",
        "line_items": [
            {
                "line_item_id": 982000000567021,
                "item_id": 982000000030049,
                "project_id": 90300000087378,
                "project_name": "Sample Project",
                "item_type": "goods",
                "product_type": "goods",
                "time_entry_ids": [
                    {}
                ],
                "expense_id": " ",
                "name": "Hard Drive",
                "item_order": 1,
                "bcy_rate": 120,
                "rate": 120,
                "quantity": 1,
                "unit": " ",
                "discount_amount": 0,
                "discount": 0,
                "tax_id": 982000000557028,
                "tax_name": "VAT",
                "tax_type": "tax",
                "tax_percentage": 12.5,
                "item_total": 120
            }
        ],
        "shipping_charge": 0,
        "adjustment": 0,
        "adjustment_description": " ",
        "sub_total": 153,
        "tax_total": 22.6,
        "total": 40.6,
        "taxes": [
            {
                "tax_name": "VAT",
                "tax_amount": 19.13
            }
        ],
        "payment_reminder_enabled": true,
        "payment_made": 26.91,
        "credits_applied": 22.43,
        "tax_amount_withheld": 0,
        "balance": 40.6,
        "write_off_amount": 0,
        "allow_partial_payments": true,
        "price_precision": 2,
        "payment_options": {
            "payment_gateways": [
                {
                    "configured": true,
                    "additional_field1": "standard",
                    "gateway_name": "paypal"
                }
            ]
        },
        "is_emailed": false,
        "reminders_sent": 1,
        "last_reminder_sent_date": " ",
        "billing_address": { address: "Coimbatore" },
        "shipping_address": { address: "Coimbatore" },
        "notes": "Looking forward for your business.",
        "terms": "Terms & Conditions apply",
        "custom_fields": [
            {
                "customfield_id": 439910000000236000,
                "data_type": "number",
                "index": 1,
                "label": "Record Number",
                "show_on_pdf": true,
                "show_in_all_pdf": true,
                "value": 23
            }
        ],
        "template_id": 982000000000143,
        "template_name": "Service - Classic",
        "created_time": "2013-11-17T02:17:40-0800",
        "last_modified_time": "2013-12-18T02:02:51-0800",
        "attachment_name": " ",
        "can_send_in_mail": true,
        "salesperson_id": " ",
        "salesperson_name": " ",
        "invoice_url": "https://invoice.zoho.com/portal/zylkar/secure?CInvoiceID=23d84d0cf64f9a72ea0c66fded25a08c8bafd0ab508aff05323a9f80e2cd03fdc5dd568d3d6407bbda969d3e870d740b6fce549a9438c4ea"
    }
}