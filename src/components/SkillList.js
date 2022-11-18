import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Skill from './Skill';

//todo: add resume contents to a db
const SkillList = () => {
    const mySkills = 
    [
        {
            "category": "PRIMARY PROGRAMMING LANGUAGES",
            "skills": ["JavaScript","Python"]
        },
        {
            "category": "SECONDARY PROGRAMMING LANGUAGES",
            "skills": ["Java","C"]
        },
        {
            "category": "FRAMEWORKS",
            "skills": ["React JS","Django","Node JS"]
        },
        {
            "category": "TOOLS",
            "skills": ["Git","Visual Studio Code","Postman"]
        },
        {
            "category": "CONCEPTS",
            "skills": ["RESTful APIs","Object Oriented Programming","Agile","SCRUM"]
        },
        {
            "category": "SOFT SKILLS",
            "skills": ["Leadership","Teamwork","Collaboration"]
        }
    ]
    return(
        <div>
            {mySkills.map(skill => <Skill key={skill.category} {...skill} />)}
        </div>
    )
}

export default SkillList