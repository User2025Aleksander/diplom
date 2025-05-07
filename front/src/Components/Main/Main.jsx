import React from 'react'
import css from './Main.module.css'

export const Main = () => {
  return (
    <main className={css.main}>
      <h2>Сводная</h2>
      <div className={css.context}>
        <div className={css.context__units}>
          <table className={css.table}>
            <colgroup>
              <col className={css.color_col_1} />
              <col className={css.color_col_2} />
              <col className={css.color_col_2} />
              <col className={css.color_col_2} />
            </colgroup>
            <caption className={css.caption}>Случаи</caption>
            <tbody>
              <tr>
                <td></td>
                <td className={css.text_center}>Нуждались</td>
                <td className={css.text_center}>Получили</td>
                <td className={css.text_center}>% %</td>
              </tr>
              <tr>
                <td className={css.text_center}>1</td>
                <td className={css.text_center}>2</td>
                <td className={css.text_center}>3</td>
                <td className={css.text_center}>%</td>
                {/* <td className={procentUglDispanserization[2020] <= minProcent ? css.organization__low : (procentUglDispanserization[2020] >= maxProcent ? css.organization__high : css.organization__middle)}>{procentUglDispanserization[2020]}%</td> */}
              </tr>
              <tr>
                <td className={css.text_center}>1</td>
                <td className={css.text_center}>2</td>
                <td className={css.text_center}>3</td>
                <td className={css.text_center}>%</td>
                {/* <td className={procentUglDispanserization[2020] <= minProcent ? css.organization__low : (procentUglDispanserization[2020] >= maxProcent ? css.organization__high : css.organization__middle)}>{procentUglDispanserization[2020]}%</td> */}
              </tr>
              <tr>
                <td className={css.text_center}>1</td>
                <td className={css.text_center}>2</td>
                <td className={css.text_center}>3</td>
                <td className={css.text_center}>%</td>
                {/* <td className={procentUglDispanserization[2020] <= minProcent ? css.organization__low : (procentUglDispanserization[2020] >= maxProcent ? css.organization__high : css.organization__middle)}>{procentUglDispanserization[2020]}%</td> */}
              </tr>
            </tbody>
          </table>
        </div>

        <div className={css.context__units}>
          <table className={css.table}>
            <colgroup>
              <col className={css.color_col_1} />
              <col className={css.color_col_2} />
              <col className={css.color_col_2} />
              <col className={css.color_col_2} />
            </colgroup>
            <caption className={css.caption}>Деньги</caption>
            <tbody>
              <tr>
                <td></td>
                <td className={css.text_center}>Нуждались</td>
                <td className={css.text_center}>Получили</td>
                <td className={css.text_center}>% %</td>
              </tr>
              <tr>
                <td className={css.text_center}>1</td>
                <td className={css.text_center}>2</td>
                <td className={css.text_center}>3</td>
                <td className={css.text_center}>%</td>
                {/* <td className={procentUglDispanserization[2020] <= minProcent ? css.organization__low : (procentUglDispanserization[2020] >= maxProcent ? css.organization__high : css.organization__middle)}>{procentUglDispanserization[2020]}%</td> */}
              </tr>
              <tr>
                <td className={css.text_center}>1</td>
                <td className={css.text_center}>2</td>
                <td className={css.text_center}>3</td>
                <td className={css.text_center}>%</td>
                {/* <td className={procentUglDispanserization[2020] <= minProcent ? css.organization__low : (procentUglDispanserization[2020] >= maxProcent ? css.organization__high : css.organization__middle)}>{procentUglDispanserization[2020]}%</td> */}
              </tr>
              <tr>
                <td className={css.text_center}>1</td>
                <td className={css.text_center}>2</td>
                <td className={css.text_center}>3</td>
                <td className={css.text_center}>%</td>
                {/* <td className={procentUglDispanserization[2020] <= minProcent ? css.organization__low : (procentUglDispanserization[2020] >= maxProcent ? css.organization__high : css.organization__middle)}>{procentUglDispanserization[2020]}%</td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}