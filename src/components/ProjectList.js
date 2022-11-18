import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Project from './Project';

const ProjectList = () => {
    const myProjects = 
        [
            {
            "title": "Web Application for Personal Trainer (2021)",
            "field": "Web Development",
            "description": "Built a web application that can schedule clients, assign exercises, and track calories for clients.",
            "skillsUsed":["React JS","Material UI","Django","Django Rest Framework","Postgresql","Third party REST API's"],
            "github":"https://github.com/MarioC17/2021_Capstone_MCFitWebApp"
            },
            {
                "title": "Edmonton Property Assessment Lookup Tool (2021)",
                "field": "Java Development",
                "description": "Built a program that parses a CSV file containing all property assessment information in Edmonton and inputs that information into a searchable table",
                "skillsUsed":["Java","JavaFX","ETL Development"],
                "github":"https://github.com/MarioC17/Edmonton_Property_Assessment_Lookup_Tool"
                
            },

            {
                "title": "Employee Scheduling App (2021)",
                "field": "Android App development",
                "description": "Android application",
                "skillsUsed":["Java","Android Studio","Agile Methodologies","SCRUM"],
                "youtube": "https://www.youtube.com/watch?v=Tk0sVweQY3g"
                
            },
            {
                "title": "Secure Mail Transfer Protocol (2020)",
                "field": "Network Engineering",
                "description": "Built a secure mail transfer protocol that allows multiple clients to send emails to each other and have those emails stored in a server for retrieval and storage",
                "skillsUsed":["Socket Programming","Python"]
                
            },
        ]
    return(
        <div>
            {myProjects.map(project => <Project key={project.title} {...project} />)}
        </div>
    )
}

export default ProjectList