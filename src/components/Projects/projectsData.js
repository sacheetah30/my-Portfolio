import startStopImage from '../../assets/images/start_stop.png';
import ansibleImage from '../../assets/images/target.png';
import airbnbImage from '../../assets/images/airbnb.png';
import portfolioImage from '../../assets/images/portfolio.png';
import amplifyImage from '../../assets/images/amplify.png';
import djangoImage from '../../assets/images/django_blog.png.png'; // Add this image
import mernImage from '../../assets/images/mern.png.png';           // Add this image

const projectsData = [
  {
    id: 1,
    title: 'Instance Start/Stop Automation on AWS',
    description: 'Automated the start and stop of AWS EC2 instances using Lambda and CloudWatch EventBridge. Includes IAM role setup, cron triggers, and real-time logging.',
    githubLink: 'https://github.com/leju-b/EC2-start-stop-automation-project',
    image: startStopImage,
    category: 'automation',
    tags: ['AWS', 'Lambda', 'CloudWatch', 'Python']
  },
  {
    id: 2,
    title: 'Ansible-Based App Deployment on AWS EC2',
    description: 'Developed an Ansible playbook to automate the deployment of a Node.js app with AWS RDS and S3 integration, configured via NGINX.',
    githubLink: 'https://github.com/leju-b/Profile-App',
    image: ansibleImage,
    category: 'devops',
    tags: ['Ansible', 'AWS', 'NGINX', 'EC2']
  },
  {
    id: 3,
    title: 'React Vite App Deployment on AWS with NGINX',
    description: 'Deployed a React Vite application on an AWS EC2 instance with NGINX as a reverse proxy. Managed firewall rules and instance security.',
    githubLink: 'https://github.com/leju-b/AirBnb-Clone-deployed-EC2',
    image: airbnbImage,
    category: 'cloud',
    tags: ['React', 'Vite', 'AWS', 'NGINX']
  },
  {
    id: 4,
    title: 'Personal Portfolio Website with React',
    description: 'Designed, developed, and deployed a personal portfolio using React, hosted on GitHub Pages. Highlights DevOps, cloud, and security projects.',
    githubLink: 'https://github.com/leju-b/my-Portfolio',
    image: portfolioImage,
    category: 'webdevelopment',
    tags: ['React', 'Portfolio', 'GitHub Pages']
  },
  {
    id: 5,
    title: 'Travel Journal - Deployed with AWS Amplify',
    description: 'Built a static travel journal app using React and deployed it with continuous integration on AWS Amplify.',
    githubLink: 'https://github.com/leju-b/Travel-Journal-deploy-amplify',
    image: amplifyImage,
    category: 'cloud',
    tags: ['React', 'AWS Amplify', 'CI/CD']
  },
  {
    id: 6,
    title: 'Dockerized Django Blog App on AWS EC2',
    description: 'Created a Django blog, containerized it with Docker, and deployed on AWS EC2. Demonstrated image build, Docker networking, and persistent volume use.',
    githubLink: 'https://github.com/leju-b/Docker-simple-django-blog',
    image: djangoImage,
    category: 'containerization',
    tags: ['Docker', 'Django', 'EC2', 'Python']
  },
  {
    id: 7,
    title: 'MERN Stack App with Docker Compose',
    description: 'Built a full-stack MERN application and containerized it using Docker Compose. Handled service orchestration and inter-container communication.',
    githubLink: 'https://github.com/leju-b/MERN-Docker-Compose',
    image: mernImage,
    category: 'containerization',
    tags: ['MERN', 'Docker Compose', 'Full Stack']
  }
];

export default projectsData;
