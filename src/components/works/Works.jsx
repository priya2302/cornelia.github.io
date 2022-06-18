import React from 'react';
import './works.scss';
import skillsVector from '../../assets/skills_vector.png';
import SkillCard from './SkillCard';
import { skillList } from '../../assets/skillsData';

export default function Works() {
    return (
        <div className='section-container'>
            <h1 style={{textAlign:"center"}}>
                My Skills
                </h1>
<h3 style={{textAlign:"center"}}>Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!</h3>
           
            
            <div className='skill-card-container'>
                {skillList.map(({ skillName, skillUrl,skillinfo }) => (
                    <SkillCard skillName={skillName} skillUrl={skillUrl} skillinfo={skillinfo}/>
                ))}
            </div>
               
            <div className='skills-vector-frame'>
                <img
                    src={skillsVector}
                    alt='skills'
                    className='skills-vector'
                />
            </div> 
        </div>
    );
};