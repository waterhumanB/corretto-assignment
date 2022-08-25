import styled from 'styled-components'

export const HeadContainer = styled.header`
  width: 100%;
  height: 50px;
  background: #9573ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
`
export const NameBox = styled.div`
  margin-left: 20px;
  font-weight: 700;
  font-size: 24px;
  color: #eee;
`
export const NavBtnContainer = styled.div`
  margin-right: 20px;

  button {
    font-weight: 700;
    font-size: 18px;
    margin-left: 20px;
    color: #eee;

    &:hover {
      color: #6a30f9;
    }
  }

  .active {
    color: #6a30f9;
  }
`
