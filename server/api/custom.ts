export default defineEventHandler((event) => {
    var endpoint = getQuery(event).endpoint;

    return $fetch('https://backend.berlindeyiz.de/api/' + endpoint);
});