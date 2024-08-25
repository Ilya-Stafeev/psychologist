import { FC, useState, useEffect } from 'react'

import { AnimatePresence } from 'framer-motion';
import { Modal } from '../../../shared/ui/modal/Modal';
import { Education } from '../../../shared/ui/modalContent/education'

import { Banner } from '../../../widgets/banner'
import { Experience } from '../../../widgets/experience'
import { Channels } from '../../../widgets/channels'

import { imagesExperience } from '../../../shared/images/experience'
import { imagesChannels } from '../../../shared/images/channels';
import { Situations } from '../../../widgets/situations';

interface ExperienceItem {
  icon: string;
  title: string;
  description: JSX.Element | string;    
}

export const Home: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }

    return () => {
      document.body.style.overflowY = '';
    };
  }, [isModalOpen]);

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
      <Banner />
      <Experience experienceItems={experienceItems}/>
      <Channels channelImages={imagesChannels}/>
      <Situations />

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