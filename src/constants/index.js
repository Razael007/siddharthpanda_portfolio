import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = 'I am an enthusiastic and driven data scientist with a strong foundation in machine learning, data analysis, and statistical modeling. Having developed a solid understanding of Python, TensorFlow, and SQL through hands-on projects and academic work, I am eager to apply my skills to real-world challenges. I’m passionate about extracting actionable insights from data, building predictive models, and contributing to data-driven solutions that can help optimize business processes and enhance decision-making.';
export const ABOUT_TEXT = 'I am a dedicated and analytical aspiring data scientist with a passion for uncovering insights and driving data-driven decision-making. With a strong foundation in Python, machine learning, and statistical analysis, I am constantly exploring new techniques to extract meaningful patterns from complex datasets. My journey in data science began with a fascination for how data can solve real-world problems, and I have developed skills in areas like predictive modeling, data visualization, and artificial intelligence. I thrive in collaborative environments, enjoy tackling intricate challenges, and am committed to continuous learning. Outside of data science, I enjoy staying active, exploring emerging technologies, and contributing to open-source projects.';

export const EXPERIENCES = [
  {
    year: "May 2024 - July 2024",
    role: "Software Engineering Intern",
    company: "Marcellus Investment Managers",
    description: `Developed automated solutions to optimize data handling and reporting. Created a bot using Python’s ReportLab to convert website data into dynamic PDF reports and streamlined the email generation process with Salesforce. Additionally, built a secure interface to present visual analytics from encrypted stock and Excel data, enhancing data-driven decision-making.`,
    technologies: ["Python", "Salesforce", "Streamlit"],
  },
  {
    year: "Dec 2023 - Jan 2024",
    role: "Global Academic Internship Program Intern",
    company: "National University of Singapore",
    description: `The Global Academic Internship Program (GAIP) at the National University of Singapore focused on enhancing skills in data analytics and machine learning. Key areas of learning included advanced statistical modeling, predictive analysis, and algorithm development. Practical projects involved working with large datasets, building machine learning models, and applying analytics to solve real-world problems. Exposure to global industry trends and collaboration with experts in the field further deepened technical knowledge and sharpened problem-solving abilities.`,
    technologies: ["Tensorflow","Keras", "Deep Learning", "Data Analytics", "AWS"],
  },
];

export const PROJECTS = [
  {
    title: "Stock Analysis Portfolio using Deep Learning",
    image: project1,
    description:
      "A deep learning-based stock analysis and prediction model that leverages historical data to forecast future stock trends. The system incorporates LSTM networks for time series prediction and various technical indicators for more accurate forecasts.",
    technologies: ["Python", "TensorFlow", "Keras", "LSTM", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "AWS Machine Learning Model Deployment",
    image: project3, 
    description:
      "A machine learning regression model deployed on AWS using SageMaker for training, Lambda for inference, and API Gateway for creating a scalable and accessible API. The model detects anamolies in network traffic using k-means algorithm.",
    technologies: ["AWS","Python", "Scikit-learn", "Boto3", "AWS Sagemaker"],
  },
  {
    title: "Fraud Detection System using Deep Learning",
    image: project4,
    description:
      "A deep learning-based fraud detection system designed to identify fraudulent transactions. The project uses techniques like neural networks and anomaly detection to classify transactions as legitimate or fraudulent, helping to mitigate risks in financial systems.",
    technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
];

export const CONTACT = {
  address: "F-202, Panchavan Complex, Borivali West, Mumbai ",
  phoneNo: "+91 83569 50603",
  email: "siddharthpanda074@gmail.com",
};
