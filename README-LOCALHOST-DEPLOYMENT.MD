

HOW TO DEPLOY IT ON A LOCALHOST 
To run your Accessibility Checker App on your local machine (localhost) for development 
and testing, follow these steps: 
 
Step 1: Prerequisites 
Ensure the following are installed: 
• Node.js: To run the React app and Node.js backend. 
• npm: For package management. 
• Git: To clone the repository (if not already done). 
 
Step 2: Clone the Repository 
If you haven’t cloned your project already, do so now: 
git clone https://github.com/charlesbuwa/Accessibility-App-demo.git 
cd Accessibility-App-demo 
 
Step 3: Run the Backend 
1. Navigate to the Backend Folder 
cd backend 
2. Install Dependencies 
npm install 
3. Start the Backend Server 
Run the Node.js backend server: 
node server.js 
• The backend should now be running on http://localhost:5000 (or the port 
specified in your code). 
• Test it by making a POST request to http://localhost:5000/upload using tools 
like Postman or curl. 
 
 
Step 4: Run the client 
1. Navigate to the client Folder 
 
cd ../client 
2. Install Dependencies 
npm install 
3. Start the React Development Server 
npm start 
• The client should now be running on http://localhost:3000. 
• Open this URL in your browser to view the app. 
 
Step 5: Configure CORS for Local Testing 
To allow your client (http://localhost:3000) to communicate with your backend 
(http://localhost:5000), update your backend's server.js file to enable CORS: 
1. Install the CORS package: 
npm install cors 
2. Add this code in server.js: 
const cors = require('cors'); 
app.use(cors({ origin: 'http://localhost:3000' })); 
3. Restart the backend server. 
 
Step 6: Test the Application 
1. Open http://localhost:3000 in your browser. 
2. Use the file upload form to submit an HTML file. 
3. Verify the results are displayed after the API processes the file. 
  