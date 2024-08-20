import { FC } from 'react'

import './Banner.scss'

export const Banner: FC = () => {
  return (
    <section className='d-block banner'>
        <div className='banner__bg-wrapper'>
            <div className='banner__bg'>
                <div className='banner__bg-block'>
                    <div className='banner__content-wrapper'>
                        <div className='banner__content-block'>
                            <div className='banner__content'>
                                <div className='banner__content-title'>
                                    Любая ситуация в жизни имеет решение
                                </div>
                                <div className='banner__content-descr'>
                                    <strong>
                                        Психолог Саша Строгонова
                                        <br />
                                    </strong>
                                    Образование: высшее, психологическое
                                    <br />
                                    Опыт работы: с 2015 года
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}