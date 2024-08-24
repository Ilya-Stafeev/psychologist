import { FC, useState  } from 'react'

import { Modal } from '../../shared/ui/modal/Modal';
import { AnimatePresence } from 'framer-motion';

import './Experience.scss'

import { imagesExperience } from '../../shared/images/experience'
import { Education } from '../../shared/ui/modalContent/education';

interface ExperienceItem {
  icon: string;
  title: string;
  description: JSX.Element | string;    
}

export const Experience: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const experienceItems: ExperienceItem[] = [
    {
      icon: imagesExperience.icon1,
      title: 'Образование и практика',
      description: (
        <>
          Высшее психологическое <span onClick={() => setModalOpen(true)} className="experience__link">образование</span>, 25+ программ повышения квалификации. Практика с 2015 года.
        </>
      )       
    },
    {
      icon: imagesExperience.icon2,
      title: 'Краткосрочная терапия',
      description: 'Применение техник разных направлений для быстрого результата.'
    },
    {
      icon: imagesExperience.icon3,
      title: '250+ довольных клиентов',
      description: 'Семейные пары, подростки, женщины, мужчины, бизнесмены и топ-менеджеры'
    },
    {
      icon: imagesExperience.icon4,
      title: 'Эксперт федеральных СМИ',
      description: 'Приглашенный эксперт и автор публикаций федеральных СМИ.'
    }
  ];

  return (
    <>
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

      <AnimatePresence>
          {isModalOpen && (
            <Modal onClose={() => setModalOpen(false)}>
              <Education />    
            </Modal>
          )}
      </AnimatePresence>
    </>
  )
}