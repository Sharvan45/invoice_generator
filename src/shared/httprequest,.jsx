import axios from "axios"

const customAxios = axios.create({
    baseURL: `https://invoice.zoho.com/api/v3/`,
    timeout: 10000,
    headers: {
        "Authorization": "Zoho - oauthtoken 1000.12345678dfgh987654323456yhne2345678",
        "X-com-zoho-invoice-organizationid": "10234695",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "Access-Control-Request-Headers": "*",
        "Access-Control-Allow-Origin": "* ",
    }
});

const requestHandler = request => {
    let newFormData = new FormData();
    newFormData.append("JSONString", JSON.stringify(request.data))

    request.data = newFormData;
    // request.headers["Access-Control-Request-Headers"] = "*";
    // request.headers["Access-Control-Allow-Origin"] = "*";
    return request;
};

customAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => (error)
);

customAxios.interceptors.response.use(
    (response) => (response),
    (error) => (error)
);

export const POST = (url, data) => {
    return customAxios.post(url, data)
}

export const GET = (url, data) => customAxios.get(url, data)

export const PUT = (url, data) => customAxios.put(url, data)