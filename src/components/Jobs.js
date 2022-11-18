
import Job from './Job';


const Jobs = () => {
    const myJobs = 
[
    {
      "title": "Web Development Intern",
      "company": "MacEwan University",
      "tenure":"Jan 2022 - Sep 2022",
      "description": ["Developed a web application that allows instructors to create synthetic data from existing datasets by setting specific guidelines and using those guidelines to create synthetic data","Developed management skills as team lead for the development team by discussing project direction weekly with stakeholders, designers, and developers","Built front-end using Javascript, HTML,CSS and Bootstrap","Built back-end using Django with the Django Rest Framework and MySQL for the databases"]
    },
    {
        "title": "Data Engineering Intern",
        "company": "unTribe",
        "tenure":"Aug 2021 - Oct 2021",
        "description": ["Performed data analysis on Canadian covid data retrieved from the government of Canada website using unTribe’s Cloud-Native Data Integration (CNDI) technology, Apache airflow, and python","Collaborated with the software development team on making new feature requests, logging bugs, and improving the documentation"]
    }
  ]
    return (
        <div>
            {myJobs.map(job => <Job key={job.title} {...job}/>)}
        </div>
    )
}

export default Jobs