import React, { useEffect } from 'react'
import css from './Main.module.css'

export const Main = ({ title, data }) => {

  useEffect(() => {
    let data = data
  }, [data])

  console.log('MAIN', data[0].department)
  return (
    <main className={css.main}>
      <h2>{title}</h2>
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
                <td className={css.text_center}>Терапия</td>
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
              <col className={css.color_col_2} />
              <col className={css.color_col_2} />
              <col className={css.color_col_2} />
              <col className={css.color_col_2} />
              <col className={css.color_col_2} />
              <col className={css.color_col_2} />
              <col className={css.color_col_2} />
              <col className={css.color_col_2} />
            </colgroup>
            <caption className={css.caption}>Деньги</caption>
            <tbody>
              <tr>
                <td></td>
                <td className={css.text_center}>План 2024г.</td>
                <td className={css.text_center}>I Квартал</td>
                <td className={css.text_center}>II Квартал</td>
                <td className={css.text_center}>III Квартал</td>
                <td className={css.text_center}>IV Квартал</td>
                <td className={css.text_center}>Итого:</td>
                <td className={css.text_center}>Выполнение плана</td>
              </tr>
              <tr>
                <td className={css.text_center}>{data[0].department}</td>
              </tr>

              {/* {data.map((d, i) => {
                return (
                  <tr key={i}>
                    <td className={css.text_center}>{d.department}</td>
                    <td className={css.text_center}>План</td>
                    <td className={css.text_center}>{Math.round(+d.january.replace(',', '.') + +d.february.replace(',', '.') + +d.march.replace(',', '.')).toLocaleString('ru-ru')}</td>
                    <td className={css.text_center}>{Math.round(+d.april.replace(',', '.') + +d.may.replace(',', '.') + +d.june.replace(',', '.')).toLocaleString('ru-ru')}</td>
                    <td className={css.text_center}>{Math.round(+d.july.replace(',', '.') + +d.august.replace(',', '.') + +d.september.replace(',', '.')).toLocaleString('ru-ru')}</td>
                    <td className={css.text_center}>{Math.round(+d.october.replace(',', '.') + +d.november.replace(',', '.') + +d.december.replace(',', '.')).toLocaleString('ru-ru')}</td>
                    <td className={css.text_center}></td>
                    <td className={css.text_center}></td>
                  </tr>
                )
              })} */}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}