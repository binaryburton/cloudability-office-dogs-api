# gb-api-data
This is the office-dog API, built on expressjs.

## Development
To use this API, you will need to go to the following github repo *https://github.com/binaryburton/cloudability-office-dogs-api.git* and clone this to your desktop in a new folder. From there, make sure you're in you're in that folder and run the following command *node app.js*. This will run the app locally on port 3000. It is up and running at this point if you see 'App is listening on port 3000!' in your terminal. 

## Routes
To understand and use our routes, you can naviagte to http://localhost:3000/api-docs and view all routes associated with this API.

## IMPORTANT Exception or Gotchas
The server currently does NOT automatically pick up changes and refresh. So, for example let's say your execute the DELETE of a dog in the dogs.json file. Once that is executed, you will have to *ctrl c* to stop the server and run *node app.js* again before you execute a GET ALL of the dogs to see the updates previously made to that json file.
EXAMPLE.
1. Successful execution of deleting a single dog.
2. *ctrl c* (Stop Server)
3. *node app.js*
4. Execute Get All office dogs to see updated data!