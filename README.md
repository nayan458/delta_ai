# Delta.ai
It is a project build to solve users doubts in real time if they have internet connectivity. It provides a personalized learning content on the basis of level of understanding of the user. If the user fails to understand then he/she would be able to connect to a mentor who is an expert of that field. The mentor and user interaction would be in the form of chat or if needed then they may also connect with a video meet. It is also possible that the doubts may be previously solved in the discussion forums, in that case the user would be send a request to check for the doubt in the discussion forums. The targeted user through this app is - students, teachers, corporate sector employees.
## Moto
-	Make users learn coding concepts in easiest possible way.
-	Making learning fun by creating a competitive environment and discussion forums.
Future Scopes
This project holds a high future value and potential to grow tremendously few of them are discussed below:
-	Add hands-on-lab challenges along with providing a personalized custom roadmap
-	Providing a ide for a quick start and guid through
-	Classrooms that anyone can create to hold small programming challenges on any tech stacks.
# Technical Aspects
This section discusses about the tech stack, Best Practices, and other technical aspects of this project.
## Overview
This project is built in MVC(Model View Controller) architecture. Here we have a react SPA(Single Page Application) to provide the view part and it communicate with the server through API(Application User Interface) provided with Laravel . The model and controllers are implemented using Laravel. To store and retrieve user data we ar-e using MySQL database. OpenAi API is used for implementing the user doubt solving session.
### Frontend
The frontend is build in react and designed using tailwindcss. MUI(material UI) components are also used in few parts of the application. Icons are imported from fontawesome and fonts are imported from google fonts. The illustrations used are taken from uistore and react-spinners npm package is used to create the spinning animation. Axios is used for Handling APIs. The folder structure is well maintained for better understanding.
### Backend
-	The Backend is build using Laravel. Although it is not yet complete, but the tables are migrated and the relationships among the tables are well established.
-	In future we would have to implement firebase for real-time chat functionality.
-	Redis for cashing purpose.
-	Mongodb for discussion forums and deploy them over different geographical areas to expand the network world wid.
### Best practices
-	This application uses CSRF tokens to send request to the server that protects the site from XSS attacks
-	DRY(Do Not Repeat Yourself) concept is implemented as much as possible by breaking down the project into smaller components.
-	Folder structure is maintained in such a way that it is easy to identify for other developers and develop upon it.
-	API tests are performed using POSTMAN
-	Error Boundaries are well maintained
-	Frontend validations are implemented

