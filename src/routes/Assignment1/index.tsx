import { ReactComponent as LeftIcon } from '../../assets/imgs/ic_left.svg'
import { ReactComponent as RightIcon } from '../../assets/imgs/ic_right.svg'

import * as S from './style'

const Assignment1 = () => {
  return (
    <S.MainCotainer>
      <div style={{ width: '100%', height: '200px' }} />
      <S.BackgroundBox>
        <S.ContextContainer>
          <S.Slogan>
            With <span>withyou company</span>
            <br /> Will be better.
          </S.Slogan>
          <S.DescBox>
            <S.Desc>
              위드유 컴퍼니만의
              <br /> 독보적인 마케팅 전략
              <br />
              <span>AD Service</span>
            </S.Desc>
            <S.SlideContainer>
              <S.SlideBtn>
                <LeftIcon />
                <RightIcon />
              </S.SlideBtn>
              <S.SlideBox />
            </S.SlideContainer>
          </S.DescBox>
        </S.ContextContainer>
      </S.BackgroundBox>
    </S.MainCotainer>
  )
}

export default Assignment1
