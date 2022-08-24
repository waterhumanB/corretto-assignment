import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { HeadContainer, NameBox, NavBtnContainer } from './style'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const toggleHandler = () => {
    setToggle((prev) => !prev)
  }

  return (
    <HeadContainer>
      <NameBox>FrontEnd-Dev-BaeSuIn</NameBox>
      <NavBtnContainer>
        <NavLink to="/">
          <button className={!toggle ? 'active' : ''} onClick={toggleHandler}>
            Assignment1
          </button>
        </NavLink>

        <NavLink to="assignment2">
          <button className={toggle ? 'active' : ''} onClick={toggleHandler}>
            Assignment2
          </button>
        </NavLink>
      </NavBtnContainer>
    </HeadContainer>
  )
}

export default Header
