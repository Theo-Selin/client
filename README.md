# Getting started with the boilerplate

## What is this?
This is a biolerplate for a CMS based blog. It uses React to render information published in Wordpress.
If you want to set this up for yourself, there are some changes that needs to be done in order to connect it
to your own Wordpress.

### Get started

##### 1. Clone the repository
Use the link in the repository to clone it to your own system. This creates a copy locally for you to do whatever you want with.

##### 2. Run npm install
In order for you to get everything neccessary for React to work properly, you need to run npm install in your terminal.
This downloads and install a folder called node_modules, which are essential for React to work properly.

##### 3. Connect your own API
This step is situational, but I'll try to be as thorough as possible. APIs can differ in their structure, which makes every API unique.
This specific boilerplate is based on an API from wordpress.com, which is a public API, but many uses wordpress locally on their computer which information looks different.

##### Connect with wordpress.com
If you want to use your wordpress.com account, all you have to do is:
1. Create a .env file in the "client" directory
2. Add this line: REACT_APP_POST_API=https://public-api.wordpress.com/rest/v1.1/sites/NAME.wordpress.com/
3. Change NAME to your wordpress site name.
After this is done you should be ready to go!

##### Connect locally
If you want to use your locally installed wordpress, there are more things you need to change and keep an eye out for. First of all you need to change the whole link in the .env file to: http://localhost/wp-json/wp/v2/posts where "localhost" differs depending on your port. Some need to use localhost:8888 for example, so make sure that's correct first. Second of all let's look at the two different structures for the data:

###### wordpress.com
![image](https://user-images.githubusercontent.com/90902429/189616314-39840e5c-0c03-4b15-8db3-d78796b2bf74.png)
This API returns an object with "posts" as an array. This means that when we fetch the data, we need to specify that it's the "posts" we want to map through. We do this when we set our posts state here:
![image](https://user-images.githubusercontent.com/90902429/189617534-0d657fc9-0821-4bc4-a213-e3ae00505baa.png)

##### Locally
![image](https://user-images.githubusercontent.com/90902429/189618698-7f4d5bd4-4f7f-4543-ad53-ffc9b4d43a40.png)
This API returns an array with three objects inside of it, so in this case, we don't need to specify what data to set the state as, we simply set all the data as our posts state:
![image](https://user-images.githubusercontent.com/90902429/189619320-ea93d7f7-fc9f-4a33-824e-584b31cd7851.png)
We also need to render this data differently since the structure differs from what's there originally so with this specific boilerplate I strongly recommend using wordpress.com unless you feel comfortable navigating and working with json.

### Deployment
You can find a live demo of this project here: [https://cms-examination-client.vercel.app/](https://cms-examination-client.vercel.app/) I've used Vercel for my live deployment but you can use any service you like. I prefer Vercel since it's easy to setup. All you have to do to deploy you own application is following:
1. Add new project <br />
![image](https://user-images.githubusercontent.com/90902429/189832054-f30a3259-1feb-4078-8809-841ecb38939f.png)

2. Import repository <br />
![image](https://user-images.githubusercontent.com/90902429/189832467-f3bbe5c5-6dba-44fa-bbd9-8834e6e633cd.png)

3. Add your .env info <br />
![image](https://user-images.githubusercontent.com/90902429/189832655-0d229c2c-2e7a-4ae0-b687-d276bc5770ec.png)
The reason why you manually have to add your .env variables are because it's often sensitive information you don't want to push to your GitHub for everyone to see. In this boilerplate, your .env file is included in the .gitignore file, so you can't find it in your repository. This way you'll still be able to use it's information in your deployed live demo.

#### How to update live deployment
Vercel updates the live demo of your site every time you push something to the GitHub repository, so you can work as you normally do and the site will automatically update for pushes made to the main branch.

### Keep calm and Keep coding!
