import { getRequestURL } from 'h3';

export default defineEventHandler(async (event) => {
    try {
        const requestUrl = String(getRequestURL(event));

        const urlSegments = requestUrl.split('?')[1];

        const response = await $fetch('https://backend.berlindeyiz.de/api/activities?' + urlSegments, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            error: 'An error occurred while fetching data',
        };
    }
});
