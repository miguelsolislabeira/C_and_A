# C&A - Automation Project for Rindus.
- - - -
## Requirements.
- - - -
- node.js
- npm

## Installation.
- - - -
**Using Linux Command Prompt - Ubuntu/Debian**

1. Update your packages list. 

     ```sh
    sudo apt update
    ```
2. Install node.js.
    ```sh
    sudo apt install nodejs
    ```
3. Install npm.
    ```sh
    sudo apt install npm
    ```
4. Clone Repository.
    ```sh
    git clone https://www.github.com/miguelsolislabeira/C_and_A.git
    ```
5. Navigate into the directory where the repo has been cloned and install all the project's dependencies.
    ```sh
    npm install
    ```
6. Install the following dependencies for running Cypress.
     ```sh
   sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
    ```
7. Please, note that you may need to upgrade your nodejs version to one of the following.
    * 14.0.0 
    * 16.0.0 
    * 18.0.0
----
**Using Windows Command Prompt**

1. Download node.js and npm from here ->[Download Windows Installer MSI](https://nodejs.org/en/download)

2. Open the downloaded file and install the package by following the instalation setup wizard.


3. Clone Repository
    ```sh
    git clone https://www.github.com/miguelsolislabeira/C_and_A.git
    ```
4. Navigate into the directory where the repo has been cloned and install all the project's dependencies.
    ```sh
    npm install
    ```
## Execution
- - - -
* To execute the tests in headless mode, type: 
    ```sh
    npx cypress run
    ```
* To execute the tests using the Test Runner, follow these steps.
1. type:
    ```sh
    npx cypress open 
    ```
2. Select "E2E2" option.
3. Select the browser and click on the button.
4. Click on the spec to be executed.

You can access the videos of the tests execution by clicking [here](https://drive.google.com/drive/folders/1f4b2A6hiUwFIhTxzoN5AL5M4vQv5cftr?usp=sharing)
