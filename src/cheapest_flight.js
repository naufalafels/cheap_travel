import fetch from 'node-fetch';
import allData from 'airport-iata-codes';

const clientId = 'JY2j6X3sGxa8v5FP2AZ8YYPwqIkfpRXn';
const clientSecret = 'g3AGZ2UdxRApulhY';
const origin = 'SYD';

// Get access token for authentication
const tokenUrl = 'https://test.api.amadeus.com/v1/security/oauth2/token';
const authData = new URLSearchParams();
authData.append('grant_type', 'client_credentials');
authData.append('client_id', clientId);
authData.append('client_secret', clientSecret);

fetch(tokenUrl, {
    method: 'POST',
    body: authData,
})
    .then(response => response.json())
    .then(data => {
        const accessToken = data.access_token;
        // Call the Flight Inspiration Search API
        const apiUrl = `https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=${origin}`;
        const headers = {
            'Authorization': `Bearer ${accessToken}`,
        };

        return fetch(apiUrl, { headers });
    })
    .then(response => response.json())
    .then(data => {
        // Process the flight data and find the cheapest flight and date
        const cheapestFlight = findCheapestFlight(data);
        console.log(cheapestFlight);
    })
    .catch(error => {
        console.error('Error:', error);
    });

function findCheapestFlight(flightData) {
    // Extract necessary information such as prices, dates, and destinations
    // Find the cheapest flight and corresponding date
    // Return an object with the cheapest flight details including date

    // Example implementation: Assuming the response contains an array of destinations
    const destinations = flightData.data;
    let cheapestFlight = null;
    const result = [];

    destinations.forEach(destination => {
        if (!cheapestFlight || destination.price.total >= cheapestFlight.price) {
            let from = allData(destination.origin);
            let to = allData(destination.destination);
            cheapestFlight = { 
                price: destination.price.total,
                from: from.map(obj => obj.time_zone_id),
                to: to.map(obj => obj.time_zone_id),
                departureDate: destination.departureDate,
                returnDate: destination.returnDate,
            };
            result.push(cheapestFlight);
        }
    });

    // Sort from highest to lowest price
    result.sort((a, b) => b.price - a.price);
    return result;
}
