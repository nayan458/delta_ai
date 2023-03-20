# Delta.ai

It is a project build to solve users doubts in real time provided that they have internet connectivity. It provides a personolized learning content on the basis of level of understending of the user. If the user fails to understend then he/she would be able to connect to a mentor who is an expart of that field. The mentor and user interaction would be inthe form of chat or if needed then they may also connect with a video meet.
It is also possible that the doubts may be previously solved in the discussion forums, in that case the user would be send a request to ckeck for the doubt in the discussion forums.
The targeted user through this app are - students, teachers, corporate sector employees.

## Moto

Make users learn coding concepts in easiest posible way.
Makeing learnig fun by creating a commpitive environment and discussion forums.

## Fututre Scopes

This project holds a high future value and potential to grow tremendously few of them are discussed below:
Add hands-on-lab challenges along with providing a personolized custom rodemap
Providing a ide for a quick start and guid through
ClassRooms that anyone can create to hold small programming challenges on any tech stacks.

# Technical Aspects

This section discusses about the tech stack, Best Practices, and other technical aspects of this project.

## Overview

This project is build in MVC(Model View Controller) architecture. Here we have a react SPA(Single Page Application) to provide the view part and it communicate with the server through API(Application User Interface) provided with larvel. The model and controllers are implemented using laravel. To store and retrive user data we are using MySQL databse. OpenAi API is used for implementing the user doubt solving session.

### Frontend

The frontend is build in react and designed using tailwindcss. MUI(material UI) components are also used in few parts of the application. Icons are imported from fontawsom and fonts are imported from google fonts. The illastrations used are taken from uistore and react-spinners npm pakage is used to create the spinning animation. Axios is used for Handeling APIs.
The folder structure is well maintained for better understanding.

### Backend

The Backend is build using Laravel. Although it is not yet complete but the tables are migrated and the relationships among the tables are well established. 
In future we would have to implement firebase for realtime chat functionality.
Redis for cashing pusrpose.
Mongodb for discussion forums and deploy them over different geographical areas to expand the network world wid.

### Best practices

This applicatioin uses CSRF tokens to send request to the server that prtects the site from XSS attacks
DRY(Do Not Repeat Yourself) concept is implemented as much as posible by brecking down the project into smaller components.
Folder structure is maintained in such a way that it is easy to identify for other other developers and develop upon it.
API tests are performed using POSTMAN
Error Boundaries are well maintained
Frontend validations are implemented