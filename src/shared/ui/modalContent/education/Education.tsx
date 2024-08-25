import { FC } from 'react'
import './Education.scss'

export const Education: FC = () => {
  return (
    <div className="education">
      <div className="education__title">Образование</div>
      <div className="education__block">
        <div className="education__institution">
          <strong className="education__institution-name">
            Международная академия экспертизы и оценки
          </strong>
          <ul className="education__list">
            <li className="education__item">Психолог (диплом)</li>
            <li className="education__item">Семейный психолог (диплом)</li>
          </ul>
        </div>

        <div className="education__institution">
          <strong className="education__institution-name">
            <br />
            Международная ассоциация когнитивно-поведенческой психотерапии
          </strong>
          <ul className="education__list">
            <li className="education__item">КПТ-терапевт</li>
            <li className="education__item">Курс «Суицидология» (повышение квалификации)</li>
            <li className="education__item">Курс «КПТ тревожных расстройств. Паническое расстройство, агорафобия, социофобия» (повышение квалификации)</li>
            <li className="education__item">Курс «КПТ депрессивных расстройств» (повышение квалификации)</li>
          </ul>
        </div>

        <div className="education__institution">
          <strong className="education__institution-name">
            <br />
            Институт международных социально-гуманитарных связей
          </strong>
          <ul className="education__list">
            <li className="education__item">Трансактный анализ (повышение квалификации)</li>            
          </ul>
        </div>

        <div className="education__institution">
          <strong className="education__institution-name">
            <br />
            Московский Институт Гештальта и Психодрамы
          </strong>
          <ul className="education__list">
            <li className="education__item">Гештальт-терапевт. 1-я ступень (диплом)</li>            
          </ul>
        </div>

        <div className="education__institution">
          <strong className="education__institution-name">
            <br />
            Высшая школа «Среда обучения»
          </strong>
          <ul className="education__list">
            <li className="education__item">Экзистенциальная психотерапия (повышение квалификации)</li>            
          </ul>
        </div>

        <div className="education__institution">
          <strong className="education__institution-name">
            <br />
            Центр реформ предприятий
          </strong>
          <ul className="education__list">
            <li className="education__item">Судебный эксперт по экспертной специальности 20.1 «Исследование психологии и психофизиологии человека»</li>            
          </ul>
        </div>

        <div className="education__institution">
          <strong className="education__institution-name">
            <br />
            Институт практической психологии
          </strong>
          <ul className="education__list">
            <li className="education__item">МАК-эксперт. Семья. Дети (сертификат о прохождении курса)</li>
            <li className="education__item">Арт-терапия для себя и клиентов (сертификат о прохождении курса)</li>            
          </ul>
        </div>

        <div className="education__institution">
          <strong className="education__institution-name">
            <br />
            Центр Психологии и Тренинга Марии Минаковой
          </strong>
          <ul className="education__list">
            <li className="education__item">Метафорические ассоциативные карты — универсальные техники и лучшие колоды (свидетельство о прохождении курса)</li>
            <li className="education__item">Лень и прокрастинация (свидетельство о прохождении курса)</li>
            <li className="education__item">Работа с авторской колодой МАК «Тараканы в голове» (свидетельство о прохождении курса)</li>            
          </ul>
        </div>

        <div className="education__institution">
          <strong className="education__institution-name">
            <br />
            Центр психологического образования Метафора
          </strong>
          <ul className="education__list">
            <li className="education__item">Краткосрочная психотерапия сексуальных дисфункций. Сниженное и гипоактивное сексуальное влечение (сертификат о прохождении курса)</li>
            <li className="education__item">Трансгенерационная травма как причина зависимых и контрзависимых отношений в паре (сертификат о прохождении курса).</li>
            <li className="education__item">Речь — технология распознания лжи и обмана. Речевые стратегии и манипуляции (сертификат о прохождении курса).</li>   
            <li className="education__item">Работа с последствиями детских и подростковых травм у взрослых (сертификат о прохождении курса).</li>         
          </ul>
        </div>
      </div>
    </div>
  )
}