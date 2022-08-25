import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 375px;
  margin: auto;
  background: #fff;
  position: relative;
  top: 50px;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;

  .ref {
    background: yellow;
    width: 100px;
    height: 100px;
    color: #fff;
  }
`
export const HeaderBox = styled.div`
  width: 375px;
  height: 50px;
  position: fixed;
  background: #fff;
  box-shadow: 0 2px 1px 0 #e9e9e9;
  display: flex;
  align-items: center;

  svg {
    margin: auto 15px auto 20px;
  }
`
export const ContextContainer = styled.div`
  padding: 15px;
`

export const TitleBox = styled.div`
  font-size: 21px;
  font-weight: 700;
  line-height: 25px;
`
export const ProgressBox = styled.div`
  font-weight: 700;
  color: #9573ff;
  align-items: center;
  display: flex;
  padding: 15px 0;
  margin: auto;
`

export const DescBox = styled.div`
  display: flex;
  margin-bottom: 12px;

  div {
    margin-right: 20px;
  }
`
export const MockDataContainer = styled.div`
  padding: 15px;
  background: #fff1f1;
  line-height: 25px;
`
