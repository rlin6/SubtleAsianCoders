# Subtle Asian Coders presents: Subtle Asian Studying! 
## Roster: Cathy Cai (Physics Backend), Ricky Lin (Project Manager), Claire Liu (Frontend), Kyle Tau (Chemistry Backend) 

---

## Overview

Subtle Asian Studying is a website designed to help students with chemistry and physics with both an interactive periodic table of elements and physics simulations. The user can choose which subject to study on the homepage, each link leading to their respective pages. The chemistry side will have the periodic table where the user can hover over each element to see more details about them. The physics side will have a plethora of simulations to choose from, where the user can adjust parameters to see its effect on the phyiscal phenomena.  

---

## Install and Running on Apache2

1. Create your own Digital Ocean account on their website [here](https://www.digitalocean.com/). Follow their instructions to create your own Droplet that runs ubuntu v18.04 x64. SSH into the droplet using ```ssh <user>@<ipAddress>``` and login.

2. Install apache2. 

```
$ sudo apt install apache2
```

3. Make sure your packages are updated with:

```
$ sudo apt update
$ sudo apt upgrade
```

4. Move into the www directory with:

```
$ cd var/www
```
 
5. Clone this repo in the directory https with:

```
$ sudo git clone https://github.com/rlin6/SubtleAsianCoders.git SubtleAsianStudying
```

6. Change the server name in SubtleAsianStudying.conf to your droplet's ip address. The line looks like this: 

```
        ServerName <IP Address Here>
```
   
7. Make a copy of the .conf file and move it to /etc/apache2/sites-available like so:
   
```
$ sudo cp SubtleAsianStudying.conf /etc/apache2/sites-available
```

8. Going into the project directory, change app.py to __init__.py and install the requirements 

```
$ cd SubtleAsianStudying
$ mv app.py __init__.py
$ pip3 install -r requirements.txt
```

9. Your var/www directory should look like:  

```
SubtleAsianStudying/
├── SubtleAsianStudying/
│   ├── __init__.py
│   ├── data
│   ├── static
│   ├── templates
│   └── util
├── doc/
├── README.md
├── .gitignore
├── wolframbeta.conf
└── wolframbeta.wsgi
```

10. Run: 

```
$ sudo a2ensite SubtleAsianStudying
$ sudo a2ensite wsgi
``` 

and restart the server: 

```
$ sudo service apache2 reload
$ sudo service apache2 restart 
```

11. Go to the ip address of your droplet on a browser and enjoy! 
---

## Install and Running on localhost

1. Open your terminal, go to the directory where you wish to clone the repo, and run this command:

```bash
$ git clone https://github.com/rlin6/SubtleAsianCoders.git
```

in order to make a HTTPS clone of the repo. 

You can also download the ZIP folder after clicking `Clone or download` on GitHub and extracting it to your desired location.

2. If you do not have a virtual environment installed, refer to [Dependencies](../master/README.md/#dependencies) to see instructions for installing it. Otherwise, activate your virtual environment with: 

**For Linux/OS:**

```bash
$ . pathToVenv/Name_Of_Environment/bin/activate
```

**For Windows:**

```bash
$ source pathToVenv/Name_Of_Environment\Scripts\activate
```

You should see the virtual environment name appear at the beginning of the terminal command line like so:

```bash
(Name_Of_Environment) $ 
```

3. Quickly install all of our [Dependencies](../master/README.md/#dependencies) with: 

```bash
(venv) $ cd pathToRepo
(venv) $ pip install -r < requirements.txt
```

4. Run app.py in the root of the repo:

```bash
(venv) $ cd pathToSubtleAsianCoders
(venv) $ python app.py
```

You should see:

```bash
 * Serving Flask app "app" (lazy loading)
 * Environment: production
   WARNING: Do not use the development server in a production environment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

5. Go to your browser of choice and paste this into the URL to take you to the localhost:

```
http://127.0.0.1:500/
```

or 

```
localhost:500
```

6. Enjoy our website! Go and choose a subject to study! 
---

### Dependencies

Make sure that you have `Python`. Run the following in your terminal:

```bash
$ python --version
```

to check the current version of Python installed on your computer. **Python 3.0.0** or greater is needed for this project.

Otherwise, you can download the latest version [here](https://www.python.org/downloads/), which should come with `pip` installed.

Here is what is being installed when you run: 

```bash
$ pip install -r < requirements.txt
```

- urllib

`urllib` has been used to get the JSON files from our API. We then use the information as data in our periodic table. You install it with:

```bash
$ pip install urllib
```

- pip

`pip` is used to install all the extra modules. Python (versions 2 to 2.7.9 or 3 and beyond) come with pip installed automatically.

- venv

`venv` provides a buffer that protects your current computer state by on a seperate, isolated environment so that different packages from different projects would not interfere with each other. If you are using Python 3.0.0 or higher, `virtualenv` comes pre-installed. Skip this step. Otherwise, run the following in your terminal to create a virtual environment, noting that Name_Of_Environment should be replaced by whatever name you want: 

```bash
$ pip install virtualenv
$ virtualenv Name_Of_Environment
```

For Python3+, run the following in your terminal:

```bash
$ python -m venv Name_Of_Environment
```

- Python3

`Python3` is required to run this project. Refer to the top of this section for download instructions. 

- json

The `json` library is used to parse through the JSON files returned by the API calls. It is a standard library from Python and requires no further action.

- flask

`flask` is the backend that runs the app and allows it to be hosted on `localhost`. The installation command is: 

```bash
$ pip install flask
```

- wheel

`wheel` is also essential and builds on what `flask` needs. To install wheel, run the following command:

```bash
$ pip install wheel
```

- Jinja2

`jinja2` is used to set up templates for the multiple HTML files. It is required by `flask`. To install Jinja2, run the following command:

```bash
$ pip install jinja2
```

- Flask-Restful 
`flask-restful` is used to create our own chemistry api to store useful information for our website. Install it with 

```bash
$ pip install flask-restful
```

### API 
  We created our own chemical elements API that provides us with the necessary information about each element. There will be no API keys required.
