import React from 'react';
import './works.scss';

const SkillCard = ({ skillName, skillUrl,skillinfo }) => {
    return (
        <div className='skill'>
            <img src={skillUrl} alt='skill' />
            <p>{skillName}</p>
            <div className='skillinfo'>
            <p>{skillinfo}</p>
            </div>
        </div>
    );
};

export default SkillCard;