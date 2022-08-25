import styled from 'styled-components'

export const MainCotainer = styled.main`
  width: 100%;
`

export const BackgroundBox = styled.div`
  width: 100%;
  height: 250px;
  background: #9573ff;
  position: relative;
  @media screen and (min-width: 720px) {
    height: 320px;
  }
`

export const ContextContainer = styled.div`
  width: 100%;
  max-width: 800px;
  position: absolute;
  margin: auto;
  top: -100px;
  left: 50%;
  transform: translate(-50%, 0%);
`
export const Slogan = styled.div`
  font-weight: 700;
  font-size: 30px;
  margin-left: 20px;

  span {
    color: #6a30f9;
  }
`
export const DescBox = styled.div`
  padding-top: 10px;
  margin: 80px auto auto;
  @media screen and (min-width: 720px) {
    padding-top: 15px;
    display: flex;
    margin: auto;
  }
`
export const Desc = styled.div`
  line-height: 35px;
  font-weight: 700;
  font-size: 28px;
  width: 100%;
  margin: auto auto auto 20px;
  color: #fff;

  span {
    font-size: 18px;
  }
`

export const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  transform: translateY(-60px);
  @media screen and (max-width: 720px) {
    transform: translateY(-35px);
  }
`
export const SlideBtn = styled.div`
  width: 100%;
  text-align: right;
  font-weight: 700;
  font-size: 18px;
  margin: auto -20px 20px;

  @media screen and (max-width: 720px) {
    path:nth-child(1) {
      fill: #fff;
    }
  }
`

export const SlideBox = styled.div`
  width: 225px;
  height: 170px;
  background: #ffe600;
  margin: 0 20px 0 auto;
  box-shadow: 3px 5px 7px #999;
  @media screen and (min-width: 720px) {
    width: 390px;
    height: 250px;
  }
`
