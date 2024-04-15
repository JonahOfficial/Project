document.addEventListener('DOMContentLoaded', function() {
    // Selecting DOM elements
    const generateBtn = document.getElementById('generateBtn');
    const toggleDarkModeBtn = document.getElementById('toggleDarkModeBtn');
    const resetBtn = document.getElementById('resetBtn');
    const activityInfo = document.getElementById('activityInfo');
    const costInfo = document.getElementById('costInfo');

    // Event listeners
    generateBtn.addEventListener('click', generateActivity);
    toggleDarkModeBtn.addEventListener('click', toggleDarkMode);
    resetBtn.addEventListener('click', resetActivity);

    // Additional event listeners
    generateBtn.addEventListener('mouseover', handleMouseOver);
    generateBtn.addEventListener('mouseout', handleMouseOut);

    // Function to generate a random activity
    async function generateActivity() {
        try {
            // Fetching data from API
            const response = await fetch('http://www.boredapi.com/api/activity/');
            const data = await response.json();
            // Generating random number of participants and cost
            const randomParticipants = getRandomInt(1, 10);
            const randomCost = getRandomInt(1, 10);
            data.participants = randomParticipants;
            // Displaying activity information
            displayActivity(data);
            // Calculating and displaying cost information
            calculateCost(data.participants, randomCost);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Function to display activity information
    function displayActivity(data) {
        activityInfo.innerHTML = `
            <h2>Sitting around doing nothing? Do this instead :)</h2>
            <p>${data.activity}</p>
            <p>Type: ${data.type}</p>
            <p>Participants: ${data.participants}</p>
            <p>Accessibility: ${data.accessibility}</p>
        `;
    }

    // Function to calculate and display cost information
    function calculateCost(participants, costPerParticipant) {
        const totalCost = costPerParticipant * participants;
        costInfo.innerHTML = `
            <h2>Cost to Participate:</h2>
            <p>Total Cost for ${participants} participant(s): $${totalCost}</p>
            <p>Cost per person: $${costPerParticipant}</p>
        `;
    }

    // Function to toggle dark mode
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

    // Function to reset activity information
    function resetActivity() {
        activityInfo.innerHTML = ''; // Clear activity information
        costInfo.innerHTML = ''; // Clear cost information
    }

    // Function to handle mouseover event
    function handleMouseOver() {
        console.log('Mouse over the generate button');
    }

    // Function to handle mouseout event
    function handleMouseOut() {
        console.log('Mouse out of the generate button');
    }

    // Function to generate random integer between min and max (inclusive)
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
