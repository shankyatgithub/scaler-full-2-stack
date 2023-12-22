const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const urlConfig = {
    LOGIN_URL: `${API_BASE_URL}/api/login`,
    SIGNUP_URL: `${API_BASE_URL}/api/`,
    LOGOUT_URL: `${API_BASE_URL}/api/`,
    GET_PRODUCTS_URL: `${API_BASE_URL}/api/products`,
    GET_USERS_URL: `${API_BASE_URL}/api/users`,
    GET_CATEGORIES_URL: `${API_BASE_URL}/api/categories`
}

export default urlConfig