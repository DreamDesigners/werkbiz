let Base_Url = `https://app.werkbiz.com/api`;
if (process.env.REACT_APP_NODE_ENV === "production") {
    Base_Url = `https://app.werkbiz.com/api`;
} else if (process.env.REACT_APP_NODE_ENV === "development") {
    Base_Url = `https://app.werkbiz.com/api`;
} else {
    Base_Url = `https://app.werkbiz.com/api`;
}


console.log(Base_Url)
export const createSubscriberApi = `${Base_Url}/contacts/`;

