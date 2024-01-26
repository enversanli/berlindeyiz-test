export default defineEventHandler((event) => {
    var imageKey = getQuery(event).code;

    return String('https://backend.berlindeyiz.de/storage/' + imageKey);
});