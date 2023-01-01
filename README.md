# todo-project

## Setup
- $ git clone [devkishor_project_todo](https://github.com/devkishor8007/todo-project.git)
- $ cd todo-project
- $ npm install
- add .env file as given the .env.example file, copy it and add your own

## baseurl
- localhost:5000

## api endpoint
- GET /api/v1/todos
- GET /api/v1/todo/{id}
- POST /api/v1/todo
- PATCH /api/v1/todo/{id}
- DELETE /api/v1/todo/{id}

## used
- nodejs, expressjs, mongodb, ejs(template engine), typescript
- yup for validate
- morgan allows you to log HTTP requests made to your application in a standardized format
- cors helps security feature implemented by web browsers
- dotenv is a zero-dependency module that loads environment variables from a .env file
- helmet helps secure your Express.js app by setting various HTTP headers.
- ts-node allows you to run TypeScript scripts without first compiling them to JavaScript
- nodemon helps automatically restarts a Node.js app when file changes are detected

## functionalities
- todo: add, create, delete, update
- filterable todo by status
- try to handle errors

## what's inside??
After setup, start the server `$ npm run dev`, you can see on your terminal `server running on http://localhost:5000!`; wait for the connection of mongodb connection and if ok hint the url on any browser, this given below image is open on your browser. Basically, this page is the opening page!!
<img src="https://user-images.githubusercontent.com/73419211/210171053-c8108b83-2b28-4621-9f43-32cce7e0273b.PNG" alt="index && create todo page">

- And you have the idea of what should you gona do. And you can do as you wanted to do.

And you can see the `view todo` button and hint button and you see the `no todo found` message because you have not added any todo.
> to add todo you can go hint back button as you can see there.
<img src="https://user-images.githubusercontent.com/73419211/210171051-3a7ff607-922a-4eaa-9d74-671ef09befc8.PNG" alt="empty todo page">

And we back to come with the first page, there is a todo form so without fill up form, if you hint the submit button you can see the error message, And while you fill the form without missing any field, then your first todo is created.

Great, you have some todo, while check the `view todo` button, you can have as same as the image you can see, I have two todo, that means I have fill up form two times.
<img src="https://user-images.githubusercontent.com/73419211/210171050-c9ea9348-8887-40b7-90a7-dd73e7aa6740.PNG" alt="list todo page">
And you see the `id` value and if you click the id value i.e `1` then you can see only one todo like as the image bellow
> to update todo you can go hint back button as you can see there.
<img src="https://user-images.githubusercontent.com/73419211/210171049-4f5b52e6-9b49-4595-8ad5-0b07e71a9732.PNG" alt="single todo page">

> on the right side, you can see the `action` and In the action section there are two things i.e. edit and delete icon and which work while you click.
As you can see the images, when you have the edit todo, at that case you can select the `edit icon action` as you need delete some todo, then you can click the `delete icon action` 

<img src="https://user-images.githubusercontent.com/73419211/210171047-07e1dc1f-b5cc-40a6-82dd-53945ce78309.PNG" alt="update todo page">

> while todo is delete successfully
<img src="https://user-images.githubusercontent.com/73419211/210171046-fd86db7d-6320-4ad7-b510-dae4aa6f0a06.PNG" alt="delete todo page">

**Happy New Year 2023**
