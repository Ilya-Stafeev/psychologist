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
            Международная ассоциация когнитивно-поведенческой психотерапии
          </strong>
          <ul className="education__list">
            <li className="education__item">Психолог (диплом)</li>
            <li className="education__item">Курс «Суицидология» (повышение квалификации)</li>
            <li className="education__item">Курс «КПТ тревожных расстройств. Паническое расстройство, агорафобия, социофобия» (повышение квалификации)</li>
            <li className="education__item">Курс «КПТ депрессивных расстройств» (повышение квалификации)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}