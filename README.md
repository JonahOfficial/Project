# Project
By Jonah Mwangala
# Random Activity Generator

This is a simple web application that generates random activities for users when they click a button. It also calculates the cost of participating in the generated activity based on the number of participants and a randomly generated cost per participant. Users can toggle a dark mode theme and reset the activity information.

## Features

- **Generate Activity**: Clicking the "Generate Activity" button fetches a random activity from the Bored API and displays it on the page along with relevant information such as type, number of participants, and accessibility.

- **Calculate Cost**: The application calculates the total cost of participating in the generated activity based on the number of participants and a randomly generated cost per participant.

- **Toggle Dark Mode**: Users can toggle between light and dark mode by clicking the "Toggle Dark Mode" button.

- **Reset Activity**: Clicking the "Reset" button clears the displayed activity and cost information from the page.

## Event Listeners

- **Click Event**: The "Generate Activity", "Toggle Dark Mode", and "Reset" buttons have click event listeners attached to trigger their respective functionalities.

- **Mouseover and Mouseout Events**: The "Generate Activity" button also has event listeners for mouseover and mouseout events. These events log messages to the console when the mouse is hovered over and moved out of the button, respectively.

## Getting Started

To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Click the "Generate Activity" button to generate a random activity.
4. Toggle dark mode by clicking the "Toggle Dark Mode" button.
5. Reset the activity information by clicking the "Reset" button.

## Technologies Used

- HTML
- CSS
- JavaScript

## Credits

- Activity data is fetched from the [Bored API](http://www.boredapi.com/api/activity/).
- This project is for educational purposes and was created by [Jonah Mwangala].

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
## Github
https://github.com/learn-co-curriculum/phase-1-javascript-project-mode
