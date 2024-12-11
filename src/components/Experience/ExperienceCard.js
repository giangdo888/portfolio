import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'
import opswat from '../../assets/png/opswat_logo.jpg'
import hcl from '../../assets/png/hcltech_logo.jpg'
import tma from '../../assets/png/1631382132338.jpg'
import dek from '../../assets/png/dek_technologies_logo.jpg'

import './Experience.css'

const companyImage = (company) => {
    switch(company) {
        case 'OPSWAT Software Vietnam':
            return opswat;
        case 'HCL Technologies':
            return hcl;
        case 'TMA Solutions':
            return tma;
        case 'DEK Technologies (Endava)':
            return dek;
    }
}

function ExperienceCard({id, company, jobtitle, startYear, endYear, skills}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:theme.secondary,
            borderColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary30,
            },
        },
    }));

    const classes = useStyles();


    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img">
                    <img src={companyImage(jobtitle)} alt="" />
                </div>
                <div className="experience-details">
                    <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{jobtitle}</h4>
                    <h5 style={{color: theme.tertiary80}}>{company}</h5>
                    <div className="experience-skills">
                    {skills.map((skill, index) => (
                        <span key={index} className="experience-skill" style={{
                                color: theme.primary,
                                borderColor:theme.primary30
                            }}>
                            {skill}
                        </span>
                    ))}
                </div>
                </div>
            </div>
        </Fade>   
    )
}

export default ExperienceCard
