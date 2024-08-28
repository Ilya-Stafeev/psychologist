import { FC, useState, useEffect, useRef } from 'react'
import { SwiperRef } from 'swiper/react';

import { AnimatePresence } from 'framer-motion';
import { Modal } from '../../../shared/ui/modal/Modal';
import { Education } from '../../../shared/ui/modalContent/education'

import { Banner } from '../../../widgets/banner'
import { Experience } from '../../../widgets/experience'
import { Channels } from '../../../widgets/channels'
import { Situations } from '../../../widgets/situations';
import { Slider } from '../../../widgets/slider';

import { imagesExperience } from '../../../shared/images/experience'
import { imagesChannels } from '../../../shared/images/channels';
import { imagesSlider } from '../../../shared/images/slider';


interface ExperienceItem {
  icon: string;
  title: string;
  description: JSX.Element | string;    
}

export const Home: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const swiperRef = useRef<SwiperRef>(null);

  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);

  const updateButtonStates = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setIsPrevDisabled(swiperRef.current.swiper.isBeginning);
      setIsNextDisabled(swiperRef.current.swiper.isEnd);
    }
  };

  useEffect(() => {
    updateButtonStates();
  }, []);

  const handleSlideChange = () => {
    updateButtonStates();
  };

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
      updateButtonStates();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
      updateButtonStates();
    }
  };

  const toggleAutoplay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (swiperRef.current.swiper.autoplay?.running) {
        swiperRef.current.swiper.autoplay.stop();
        setIsAutoplayEnabled(false);
      } else {
        swiperRef.current.swiper.autoplay.start();
        setIsAutoplayEnabled(true);
      }
    }
  };

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
      <Slider
        swiperRef={swiperRef}
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
        isAutoplayEnabled={isAutoplayEnabled}
        imagesSlider={imagesSlider}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
        toggleAutoplay={toggleAutoplay}
        handleSlideChange={handleSlideChange}
      />

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