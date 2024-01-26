import {getRequestURL} from "h3";

export default defineEventHandler((event) => {
    return ({ message: 'Hello from the API!' });
});