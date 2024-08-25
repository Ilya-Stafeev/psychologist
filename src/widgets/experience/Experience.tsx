import { FC } from 'react';

import './Experience.scss'

interface ExperienceItem {
  icon: string;
  title: string;
  description: JSX.Element | string;
}

interface ExperienceProps {
  experienceItems: ExperienceItem[];  
}

export const Experience: FC<ExperienceProps> = ({ experienceItems }) => {
  return ( 
    <section className='experience'>
        <div className='experience__block'>
            {experienceItems.map((item, index) => (
                <div className='experience__item' key={index}>
                    <div className='d-flex align-items-center experience__header'>
                        <img src={item.icon} alt="" className='experience__image'/>
                        <h3 className='experience__title'>{item.title}</h3>
                    </div>
                    <div className='experience__description'>
                        <p className='experience__text'>
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>  
  )
}