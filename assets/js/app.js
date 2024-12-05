// DOM elements
const activityForm = document.getElementById('activity-form');
const chartContainer = document.getElementById('chart-container');
const badgeContainer = document.getElementById('badge-container');

// Retrieve activities from localstorage or initialize empty array
let activities = JSON.parse(localStorage.getItem('activities')) || [];
let badges = [];

//Event listener for form submission
activityForm.addEventListener('submit', (e)) => {
        e.preventDefault();
    }

//Get user input
const activityType = document.getElementById('activity').value;
const duration = parseFloat(document.getElementById('duration').value);
const distance = parseFloat(document.getElementById('distance').value);
const date = document.getElementById('date').value;