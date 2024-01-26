import {getRequestURL} from "h3";

export default defineEventHandler((event) => {
    var requestUrl = String(getRequestURL(event));
    var slug = requestUrl.split('=')[1];

    return $fetch('https://backend.berlindeyiz.de/api/activities/' + slug);
});