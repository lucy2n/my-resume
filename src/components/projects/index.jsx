import React from 'react';
import style from './style.module.css';
import { projects } from './constants';
import Project from '../project';

const Projects = () => {
    return (
        <section className={style.main}>
            <h2 className={style.title}>
                Projects
            </h2>
            <div className={style.projects}>
                {
                    projects.map(project => {
                       return <Project project={project} />
                    })
                }
            </div>
        </section>
    );
};

export default Projects;