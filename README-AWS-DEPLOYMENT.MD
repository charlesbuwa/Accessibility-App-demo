

HOW TO DEPLOY APPLICATION ON AWS SERVER 
 
Step 1: Deploy the React client 
1. Build the React App 
Prepare the production build of your React app: 
npm run build 
This generates a build directory with the optimized static files. 
2. Create an S3 Bucket 
• Go to the S3 service in the AWS Management Console. 
• Click Create Bucket and configure the following: 
o Bucket Name: Choose a unique name (e.g., accessibility-checker-
client). 
o Region: Select your preferred AWS region. 
o Block Public Access: Uncheck "Block all public access" (you’ll configure 
access settings later). 
o Click Create Bucket. 
3. Enable Static Website Hosting 
• Open your bucket and go to the Properties tab. 
• Scroll down to Static Website Hosting and click Edit: 
o Select Enable. 
o Enter index.html for the Index Document. 
o Leave Error Document as index.html. 
o Save changes. 
4. Upload the Build Files 
• Go to the Objects tab in your bucket. 
• Click Upload → Add files. 
• Select all files from the build directory. 
• Click Upload. 
5. Set Bucket Permissions 
• Go to the Permissions tab and scroll to the Bucket Policy. 
• Add this policy to make the files publicly accessible: 
 
 
2. Redeploy the client 
Rebuild the React app and re-upload it to the S3 bucket. 
 
Step 5: Optional - Add CloudFront for client 
1. Create a CloudFront Distribution 
• Go to the CloudFront service. 
• Click Create Distribution and configure: 
o Origin Domain Name: Your S3 bucket URL. 
o Viewer Protocol Policy: Redirect HTTP to HTTPS. 
2. Deploy and Test 
• CloudFront will provide a public URL for your client. Use this for accessing your 
app globally with reduced latency. 
 