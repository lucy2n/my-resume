import React from 'react';
import style from './style.module.css';
import {ArrowUpRightFromSquare} from '@gravity-ui/icons';
import { Icon } from '@gravity-ui/uikit';

const Project = ({project}) => {
    return (
        <div className={style.main}>
            <img src={project.img} alt={project.name} className={style.img} />
           <div className={style.info}>
                <a className={style.title} href={project.link} target='_blank' rel="noreferrer">
                    {project.name} 
                    <Icon data={ArrowUpRightFromSquare} size={24}/>
                </a>
                <p className={style.desc}>
                    {project.desc}
                </p>
                <p className={style.desc}>
                    {project.stack}
                </p>
           </div>
        </div>
    );
};

export default Project;