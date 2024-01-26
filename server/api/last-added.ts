export default defineEventHandler((event) => {
    return $fetch('https://backend.berlindeyiz.de/api/activities/son-eklenenler');
});