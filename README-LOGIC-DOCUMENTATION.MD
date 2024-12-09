

1. Overview 
The Accessibility Checker is a client-server application designed to evaluate the accessibility 
compliance of HTML files. The system identifies issues such as missing attributes, skipped 
heading levels, and other accessibility barriers. It generates a compliance score and provides 
suggestions for fixes. The architecture is modular, scalable, and follows standard software 
design principles. 
 
2. Architecture 
The application uses a 3-tier architecture: 
1. Presentation Layer (client): 
• Built with React for a user-friendly interface. 
• Styled with Tailwind CSS for responsiveness and modern design. 
• Handles file upload and displays the analysis results. 
2. Application Logic Layer (Backend): 
• Built with Node.js and Express. 
• Processes uploaded HTML files using a rule-based algorithm. 
• Manages API endpoints for file upload and analysis response. 
3. Data Processing Layer: 
• Utilizes Cheerio to parse HTML and traverse its structure. 
• Implements accessibility rules to evaluate compliance. 
 
3. System Components 
client 
• React Components: 
• FileUpload: Handles file selection and uploads. 
• AccessibilityReport: Displays the compliance score and issue details. 
• Libraries: 
• Axios: Communicates with the backend API. 
• Cors: Allow requests from speci1ic origins or all origins during 
development.(Middleware) 
• Tailwind CSS: Provides pre-built styles for rapid UI development. 
• Add a descriptive alt attribute:  
<img src="image1.jpg" alt="Description">. 
 
Scenario 2: Skipped Heading Levels 
• HTML Input: 
<h1>Main Title</h1> 
<h3>Subsection</h3> 
• Detected Issue: 
• Heading levels are skipped (<h1> → <h3>). 
• Suggested Fix: 
• Use <h2> instead of <h3>. 
 