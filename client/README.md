# News app to read latest news

UI to view latest news from newsapi.org

---

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.
Alternatively, you can use docker to run dockerfile and build a container.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v15.13.0

    $ npm --version
    7.7.6

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

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
