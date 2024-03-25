const fth = async (city) => {
let url = await fetch(
`https://api.weatherapi.com/v1/current.json?key=84a9c6a0dc6848d590b174213241002&q=${city}&aqi=no`
);
let response = await url.json();
console.log(response);

function formatDateAndTime(inputString) {
// Parse the input date and time string into a Date object
const date = new Date(inputString);

// Retrieve the components of the date
const dayOfWeek = date.getDay();
const dateOfMonth = date.getDate();
const year = date.getFullYear();

// Retrieve the components of the time
const hours = date.getHours();
const minutes = date.getMinutes();

// Convert the day of week from number to name
const daysOfWeek = [
'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
const dayName = daysOfWeek[dayOfWeek];

// Format the time components, ensuring two digits
const formattedHours = hours.toString().padStart(2, '0');
const formattedMinutes = minutes.toString().padStart(2, '0');

// Format the date and time
const formattedDate = `${dayName}, ${dateOfMonth}, ${year}`;
const formattedTime = `${formattedHours}:${formattedMinutes}`;

// Combine date and time with a newline character
const formattedOutput = `${formattedDate}\n${formattedTime}`;

return formattedOutput;
}

// Example usage:
const result = formatDateAndTime(response.location.localtime);
console.log(result);
// Output should be:
// "Monday, 11, 2024
// 17:00"


document.querySelector(
".temperature"
).innerHTML = `${response.current.temp_c}&deg;`;
document.querySelector(".city").innerHTML = response.location.name;
document.querySelector(".date").innerHTML = result;
document.querySelector(".weather img").src = response.current.condition.icon;
document.querySelector(".condition").innerHTML =
response.current.condition.text;
document.querySelector("#cloudy").innerHTML = `${response.current.cloud} %`;
document.querySelector(
"#humadity"
).innerHTML = `${response.current.humidity} %`;
document.querySelector("#Wind").innerHTML =
response.current.wind_kph + " km/h";
if (response.current.is_day === 0) {
response.current.is_day = "night";
} else if (response.current.is_day === 1) {
response.current.is_day = "day";
}
};
fth("Karachi");

// i make this for get data nad show out put
let bttton = document.querySelector("button");
bttton.addEventListener("click", (e) => {
let getvalue = document.querySelector("#search").value;
fth(getvalue);
});

document.querySelector("#London").addEventListener("click", (e) => {
fth("london");
});
document.querySelector("#newyork").addEventListener("click", (e) => {
fth("new york");
});
document.querySelector("#karachi").addEventListener("click", (e) => {
fth("karachi");
});
document.querySelector("#dehli").addEventListener("click", (e) => {
fth("India dehli");
});
