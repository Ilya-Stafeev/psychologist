import { FC } from 'react'

import './Situations.scss'

interface SituationItem {
    title: string;
}

const situationItems: SituationItem[] = [
    {
      title: 'Проблемы в отношениях',
    },
    {
      title: 'Моральное насилие',
    },
    {
      title: 'Неуверенность, самооценка',
    },
    {
      title: 'Измена. Уход партнёра',
    },
    {
      title: 'Любовная зависимость',
    },
    {
      title: 'Тревога. Депрессия',
    },
    {
      title: 'Прокрастинация. Выгорание',
    },
    {
      title: 'Проблема в коммуникациях',
    },
    {
      title: 'Психологические травмы',
    }
];

export const Situations: FC = () => {
  return (
    <section className='situations'>
        <div className='container'>
            <h1 className='situations__title'>
                В каких ситуациях помогаю
            </h1>

            <div className='situations__block'>
                {situationItems.map((item, index) => (
                    <div className='situations__item' key={index}>
                        <h3 className='situations__title'>{item.title}</h3>
                        <div className='situations__btn-block'>
                            <div className='situations__btn'>
                                Подробнее
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}