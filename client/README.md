# News app to read latest news.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

###
### Docker installation

  Alternatively, you can avoid above steps by using docker. Download and install docker onto your system from the official docker website (https://docs.docker.com/desktop/). Follow the instructions shown on it based on your system's operating system. If the installation is successful, you should be able to run the following command to see list of commands docker has.

       $ docker

### Build docker image.

  Once docker is installed, use the following commands to build image to run server.

     $ docker build . -t <yourusername>/image-name

### Running the project using docker

  Once docker image is built, run the container and expose a public port to access server.

    $ docker run -p 3000:3000 -d <yourusername>/image-name

  By using the above command, you will be able to access server on port 3000.