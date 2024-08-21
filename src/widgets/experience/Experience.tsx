import { FC } from 'react'
import { Link } from 'react-router-dom'

import './Experience.scss'

export const Experience: FC = () => {
  return (
    <section className='experience'>
        <div className='experience__block'>
            <div className='experience__item'>
                <div className='experience__header'>
                    <img src="" alt=""  className='experience__image'/>
                    <h3 className='experience__title'>Образование и практика</h3>
                </div>
                <div className='experience__description'>
                    <p className='experience__text'>
                        Высшее психологическое <Link to={'/'} className='experience__link'>образование</Link> , 25+ программ повышения квалификации. Практика с 2015 года.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}