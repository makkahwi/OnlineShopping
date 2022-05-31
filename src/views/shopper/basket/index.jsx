import { cilMinus, cilPlus, cilTrash } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CButton, CButtonGroup, CImage, CTable, CTableBody, CTableDataCell, CTableFoot, CTableHeaderCell, CTableRow, CTooltip } from '@coreui/react';
import React, { useState } from 'react';
import Content from '../../../components/content';

export default function Basket() {

  const tempImage = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NEA8PDRAPDg8PDxAVFRAVFRAQERAQFhIXGBUVGBcYHSggGholGxYVITMhKCkrLi8uFyEzODMsNygtLi0BCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUDBAYCB//EAEAQAAICAQIDBAYHBAoDAQAAAAABAgMRBBIFITEGE0FRImFxgZGhFCMyM3OxsjRSs8EVJUJTYnKCktHwdIPhJP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7iAAIBIAgkACAAAAAAAACSAAAAAkgAEAAJBAAEkACSAAJBAAAAAiSESAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUCESAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAACSAAJIAAAAAAAAAAACQAAAAAAAAVPGtZbGdFOncVbbKXOSylFL/vwZW3cF185OT1KTl4RsujFexJYQHUA5WPAtcmn9JfJ/3tzXwwWHD9ZqIah6fVSrk5V7oOKwuT5r8/gBdAAAAAAAAAAAAAAAAAACAAAAAAAASAAAAA5Gem1XEVJudShVbOKT3ReVjyTzyaN7SaDiFMI112aZRjnGVNvm89cesruG8djpe9g65TbvsllNLrhY5+w2p9rY4e2maeHhuUcJ+GQPfB67b777LZxc6oOqM4r0VLLy0n1x/MyavfRyt4lsfk66t3w6mtRZZRRRp6f2nVZm5fuRfNyfrxj4M8xqrpc4afTvW3Q+8tnzip+KWc5fqXxYGxprZXPbXxLdJ9I93Um/Yn1HHqbaa6L+8320SadjilmMvFpe5e8rIcR02oezVaeFWeStr5bX61jp8Szo3/AFug1Et++tuq19ZR8E/WsZ9z9QGvxDg+q1DjO63T8lhNOcVjr5GCHDtRoYzvrsoe2OHhynycl4YXjg8x4zU6q6dTp3c6uXNrGVlL345GPUcVo7m2qjTunvduXlYymnzA7PSTc665S6yhFv2tJsymvw/7qr8OH6UbAAAAAAAAAAAAAABAAAAAAAAJAAAAAfOY095f3ecb7nHPXGZ4yeeIaZU22V53KDxnpnkZ9H+1w/8AJX8Qce/ab/8AP/JAdGv26zHWOk9D4rp8WVPDdVqNJp++iq512zeNze5T5rPLr9np6jPTfO2unU0+lfpVssh4zr8/hn5+Riu4XXrG7dHZBOTzKmT2yhJ9cL/q9YFFKWW2+bbbftZ0yb/qtv7fNetw9FfpNSvgSp9PW2V11r+ynmU/Uv8A5lm5HVZctdZHZVVDZp63ycm1hPH/AH5AUXFUu/vx076z9TNRnqcnJty5tttvzbeWeWB9I4f9zV+FD9KNg1+H/c1fhQ/SjYAAAAAAAAAAAAAAIBJAAAAAABIAAAAD5xqKLN82oWfblz2y/eZjensfWFj/ANMmfSwB8503f0zU6lZGS8dsua8msc0WM9TTfz1OjsU/GdSay/PDx/M7UAcVGzS1+lVo77Z+Dt+z8s5+Bpa+7UaiW62M3jpFRkowXqX8z6EAPmn0ez9yf+2X/Aens/cn/tl/wfSwBg0CxVVn+7h+lGcAAAAAAAAAAAAAAAgAAAAB5smoxcn0im37Einh2mpksxr1DT8VW2i01n3dn4c/0s53gPHdPRp667JSU478pQsl1m2uaWOjAveHcTq1Kbqllx+1FpxlH2pm4crVfKU9ZraYyrgtO1ByWN80k92PH7PzM0eJaqulaq6UHB1xUKUuc7HhKbl4Z5vC8GB0gKC6Ovprd7urm4x3So7uMY4Sy0pLnyRNnFLdTOqrSONbnUrZ2SW7u4vpFLxeQLW7XQhbVS92+1T24XL0Vl5fgbJzTjfHXaSOolGzarttkVs3J1vKcfBrHzRY9ntZZfS52tOXeTWUkuSfIC0BzdfGrVTJ+jZdPVSprWMLwxnHkZ7lrtPsm7VqYyklOCqScE/7UdvN49YFxVqITc4wlGUq3iSTy4vyfkeNfrIaeuVtmdkcZwsvm0ly9rKPs/VctRqd1sWo2YsWxLvJbXhrn6PM3O1v7Hd7a/4kQLaEtyTXRpP4nooNRq9R39WnolCKnpYyzKO7Y8vM/XyWMdOZjjdrVe9J30JtwU++cIpwhnD9Fcm84A6MFFptZqKrL6LJLUzhT3lbUVW5eG1pcuuDDqZ62qp32amuMlHc6HXBR/yZznIHRgo7+KXWvT1afbCy6pWynL0lVBrwXi85PEtVq6LtPTbOu2Fs39YobJNJc4tZwvDmBfgoadRqdY5zpujpqYTcYehGyVjXWT3dEbXBddZa7ar9ve0SSco/ZnF/Zkl4dALQAAAAAAAAgkgAAAMOs+7s/Dn+llf2WWNJVnl9v+JItgBpcbX/AObUfg2fpZWazSzt4fR3abnXCmaj4vbFZXwbOhAHPa3j9NtM66d8r7IOKq2z3RlJYeeWOWTXor/o62ud2e6np4wlNJyULFh88eHL5nUYJaA5uWuWo1uklUpOqKuSs2tKUnW92M+C9Hn6zxwXidekhZRdvjdG2eK1GUpTz024XPJ05AHG6amzuI3bJOVGtlOVa67fR3Y9hb2cfja64aL66yclnMZqNcP7Tl0LwhICh4TfGvV6qqeYztsUoLEsSiott56dDY7WLOjuS5vNf8SJbgChqT+nVPDx9BXP/WzKl/WLfh9E6/8AsLkAcvxjvVqNS6d2/wChxw1nOO8jux68ZNOUdC6ZLTVSu1LreW4zlODx6UpN8ljn09x2hCQHJ6PUKmWl1WJTp+ixpnJRk+7nHrldcZWPiZ9VxGOp1Oj7pS7qNkvrHFxU5Y6Rzz5L8y14lptQ5ws01ii4Jp1T3d1NPzx4mDT6G+y6F2qda7pS2V17mk5LDk2wKTS6XRaffVr60rIye2bVjVlfg04l12cqhi2dVCorlJKH2t1kFn0mn0XPkXDRIAAAAAAAAEAAAAAKrtJxKWmpzD7yctsX128m3L3JfHBU6bs1ZbBW232K6aUlzk9uVlJvOfgbHbelyqrmukZtP1blyfxXzLjRa6uymNqlFQ2rLbS2NLmn5YAr+z1+ojGyGrU0q+atn4x55Tk+uMZz5Mx2drdOm0oXTin9tRjt+bT+Rr6/jH0vS6ruq5xjBQzJ49KLms9P8KefUzd4CqvoSzt2bZ95nGM5e7d7vlgDZ1HG6a6Y6jMp1zltW1ZecPk08Y6M1X2q029R+sxyzPati+effg5avd9Cn12/SoY/zd3LPy2l12kglotNhJYdePfVLIG/LtVpVPZmbWcd5t+r9uc5x68GPVyr/pCnNlqm4LEEvqmsT6vd7fDwRqdqK4x0emwksSgly6J1Sz+SPMv2/R/g1/omBY2dqNPHvE1buhLbt2rM3lp7efTl448Db4XxqnVKThui4LMoySTS8+uMe8p+y0E9Tq20sxk0n5Zsln8kV0otXcRUOX1V3Jfu97Hd8sgXq7V6Xft+s25x3m1bPb1zj14N/hXFK9XGUq1NKMsPcknnGfBsquAdx9Blv2Y+s7zOOuXjPuxg89hvurfxF+hAee12qnvpo3uqqeHOSyuTljn6ksvBgt7Od3FW6C2UrE1zUoLcvU1he55LLj9+lc66NVGeZYcbFhKG54+1nl05+HQquK8AjpISvpvnBrGOe2UsvwlHHP3AXt/Fo6amuWrzG2UVmEcSbkl6WMPGPf4mHQ9paLpqtqyqUnhb0km30WU3h+0oKtS7tRop6nmnCKy8JNqc0n5c2olj2427acfe7pYx9rbj/naBacU47TpZKEt05tZ2QSbS8M5aSJ4XxynVNwhuhNLOySSbXmsNplNwT9vv77He4njPnldP9PyPXFMf0lp+6xv9Dfj2yzn17PlgDdn2q0y3crcxljbtWZPnlrn0WPHzRvcK4vVq1J17k44zGSxJZ6PlyaKTsfBO3VtpZTik/JOVmfyXwJ7NpLWatLkk7OXhjvWB1IAAAAAAABBJAAAAeLqo2RcJpSjJYafRoobOyGncsqViXlmL+bWToQBr6XQ1VV91CKUGnlPnuz1z5lRZ2S07balbGLf2E0181+Z0AArb+CUzpjRiUK4y3La1lyw+bbTz1Z713Ca76oUzc1GtxxhpPlFxWeXkzfAGhr+FV6iuFU3NRraaw0nyi4rPLyZ5fB6+9rvzPfVGMUsrbhJpZ5etliANDh/Cq9PO2cHNu15llprq3y5etmJcMhRK/UVxnZZZGea247ZZeXFcvHGC0AHAqzh+ZTnVdCyLeKG90W/DnjKWfBsv+xumnXTKU0495PKT5NxUUs/mXrri3lpN+eFk9AafEuGVaqKjaumcSXKUc+TKmnshp4vLlZJLwzFfNLJ0QAr+IcHp1EI1zjtUFiLjhOK8l6vUamh7NUUzVjc7ZRxjc00munJLwLsAVXFOBU6qSnLdCax6UWk3jpnJPC+B06VucN05vPpSabWeuMFoANDhvCq9M7JVubdrTe5p9HJ8sL/ExouFV022XQc3K1yym01zlueOXmb4AAAAAAAAAgEkAAAAAAEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEEkAAAAJIAEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k=";


  const [items, setItems] = useState([
    { id: 1, image: tempImage, name: "Product 1", desc: "Nice", price: 60, stock: 910, sold: 90, count: 1 },
    { id: 2, image: tempImage, name: "Product 2", desc: "Good", price: 50, stock: 159, sold: 91, count: 1 }
  ])

  const actionsClick = (i, action) => {
    let newList = [...items]
    newList[i]["count"] = (action === "add" ? newList[i]["count"] + 1 : newList[i]["count"] - 1)
    newList[i]["count"] === 0 ?
      setItems(newList.filter((_, j) => j !== i))
      :
      setItems(newList)

  };

  const onSubmit = () => {
    console.log("Ordering")
  };

  return (
    <Content
      title={"Items to Order"}
      content={
        <>
          <CTable hover>
            <CTableBody>
              {items.map((item, i) => (
                <CTableRow className='align-middle' key={i}>
                  <CTableDataCell>
                    <CImage src={item.image} width={50} />
                  </CTableDataCell>

                  <CTableDataCell>{item.name}</CTableDataCell>

                  <CTableDataCell>${item.price}</CTableDataCell>

                  <CTableDataCell>
                    <CButtonGroup size="sm">
                      <CTooltip
                        content="Add"
                        placement="top"
                      >
                        <CButton color="success" onClick={() => actionsClick(i, "add")}>
                          <CIcon className='text-light' icon={cilPlus} />
                        </CButton>
                      </CTooltip>

                      <CButton color="light">
                        {item.count}
                      </CButton>

                      <CTooltip
                        content="Reduce"
                        placement="top"
                      >
                        <CButton color="danger" onClick={() => actionsClick(i, "reduce")}>
                          <CIcon className='text-white' icon={item.count === 1 ? cilTrash : cilMinus} />
                        </CButton>
                      </CTooltip>
                    </CButtonGroup>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>

            <CTableFoot>
              <CTableRow>
                <CTableHeaderCell></CTableHeaderCell>
                <CTableHeaderCell></CTableHeaderCell>

                <CTableHeaderCell>
                  <h4>
                    {"$"}
                    {items.reduce((sum, order) => sum + order.price, 0)}
                  </h4>
                </CTableHeaderCell>

                <CTableHeaderCell>
                  <CButton color='success' size='lg' className='text-light' onClick={onSubmit}>
                    Make the order
                  </CButton>
                </CTableHeaderCell>
              </CTableRow>
            </CTableFoot>
          </CTable>

        </>
      }
    />
  )
}
