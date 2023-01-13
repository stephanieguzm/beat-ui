# The Beat

## Overview
The Beat is a web application for people who want the latest news but don't have time to read lengthy articles.<br>
The application consumes the [New York Times Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview).

### User Stories: 
A user will:<br>
✔️ see today's top stories (articles)<br>
✔️ see a "detailed" view of a story they select<br>
✔️ be able to see different top stories by section<br>

## Demo
### Home -> Fashion Section -> Article --> Theater Section --> Article --> Home
https://user-images.githubusercontent.com/101955307/212229485-8c5e89d3-f675-4a48-99e8-04a91040d7aa.mov

## Setup
1. From your command line, `cd` to the parent directory
2. Clone down this repository:
  ```
  git@github.com:stephanieguzm/beat-ui.git
  ```
3. `cd` into `beat-ui` directory and run:
  ```
  npm install
  npm start
  ```
4. Obtain an API key from The New York Times following [these instructions](https://developer.nytimes.com/get-started)
5. Update the repository's `.env` file (found in the `root` directory) with your new API key
  ```
  REACT_APPP_API_KEY="YOUR-KEY-HERE"
  ```
6. Restart your server on your command line:
  ```
  ctrl + c
  npm start
  ```
7. Visit the application at the following url in your browser: `http://localhost:3000/`

## Technologies Used
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) 
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) 
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

## Project Planning 
### [Component Architecture & Inspiration Board](https://www.figma.com/file/2gzWklRegvYWFno8IiytWy/Take-Home-Planning?node-id=1%3A384&t=BMU740MDQKHVYr7D-1)
![Screen Shot 2023-01-12 at 9 17 42 PM](https://user-images.githubusercontent.com/101955307/212229405-67d90c0d-6ece-465e-9a21-9a50aaeac050.png)

## Contributors:
Stephanie Guzman [Github](https://github.com/stephanieguzm) [LinkedIn](https://www.linkedin.com/in/stephanie-guzman-sdsw/)
