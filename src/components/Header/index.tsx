import { useState, MouseEvent } from 'react'
import { NavLink } from 'react-router-dom'

import { HeadContainer, NameBox, NavBtnContainer } from './style'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const toggleHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const { order } = e.currentTarget.dataset
    order === '1' ? setToggle(false) : setToggle(true)
  }

  return (
    <HeadContainer>
      <NameBox>FrontEnd-Dev-BaeSuIn</NameBox>
      <NavBtnContainer>
        <NavLink to="/">
          <button
            data-order={1}
            className={!toggle ? 'active' : ''}
            onClick={toggleHandler}
          >
            Assignment1
          </button>
        </NavLink>

        <NavLink to="assignment2">
          <button
            data-order={2}
            className={toggle ? 'active' : ''}
            onClick={toggleHandler}
          >
            Assignment2
          </button>
        </NavLink>
      </NavBtnContainer>
    </HeadContainer>
  )
}

export default Header
