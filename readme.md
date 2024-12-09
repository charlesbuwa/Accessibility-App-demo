Backend Setup
Navigate to the Backend Directory
cd backend
Install Dependencies Ensure you have Node.js and npm installed. Run:
npm install express multer cheerio jest supertest
Run the Server Start the backend server:
node server.js
The server will be available at http://localhost:3000.
Run Tests To test the backend functionality, use Jest:
npx jest



Frontend Setup
Navigate to the Frontend Directory
cd frontend
Install Dependencies Ensure you have Node.js and npm installed. Run:
npm install react react-dom axios @testing-library/react @testing-library/jest-dom tailwindcss postcss autoprefixer
Configure Tailwind Ensure you’ve created the tailwind.config.js and added the correct content paths as shown above. Compile Tailwind with PostCSS:
npx tailwindcss -i ./src/styles/tailwind.css -o ./src/index.css --watch
Start the Development Server Run the React app:
npm start
The app will be available at http://localhost:3000.
Run Frontend Tests Test the frontend using Jest:
npx jest
