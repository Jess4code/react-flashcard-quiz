# React Flashcard Quiz App
This project is just a simple flashcard quiz app where you can pick a the category and the amount of the trivia questions you want built using ReactJS.

## Credits
This project was created as a part of [Web Dev Simplified](https://courses.webdevsimplified.com/) curriculum. Special thanks to Kyle Cook for providing a tutorial and guidance on building this application. The video is posted by [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified) on youtube [How To Build A Flashcard Quiz With React](https://www.youtube.com/watch?v=hEtZ040fsD8).

## Notes
If you try to follow the tutorial, you may face a problem using the API "Error 492 , Too many requests" and to solve this you just have to delete the useEffect function that starts right onload, then create the html form and make the submit button or "Generate" button is the action triggering the API fetching process.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your machine.
- axios library installed.

### Installation

1. Clone the repository:
  ```sh
   git clone https://github.com/Jess4code/react-flashcard-quiz.git
  ```

2. Install dependencies:
  ```sh
   cd react-flashcard-quiz
   npm install
  ```

3. Install axios library:
  ```sh
   npm i axios
  ```

#### Running the app
To run the app in development mode we run this command line:
  ```sh
   npm run start
  ```
Open http://localhost:3000 to view it in your browser. The page will reload when you make changes.

#### Building the app
To build an app for production , run this command line:
  ```sh
   npm run build
  ```

##### Keep On Hacking!
