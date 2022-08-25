import { useInView } from 'react-intersection-observer'
import { useRef } from 'react'

import { ReactComponent as HanBokDate } from '../../assets/imgs/hanbok_date.svg'
import { ReactComponent as WidthLogo } from '../../assets/imgs/width_Logo.svg'
import { ReactComponent as ArrowIcon } from '../../assets/imgs/arrow-left.svg'

import * as S from './style'

const Assignment2 = () => {
  const [ref, inView] = useInView()

  const homeRef = useRef<HTMLDivElement>(null)

  const scrollHandler = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <S.MainContainer>
      <div ref={homeRef} />
      {inView ? (
        <S.HeaderBox>
          <WidthLogo />
        </S.HeaderBox>
      ) : (
        <S.HeaderBox>
          <button onClick={scrollHandler}>
            <ArrowIcon />
          </button>
          평범한 한복데이트는 그만! 고퀄리티
          <br />
          한복대여 체험단 모집
        </S.HeaderBox>
      )}
      <div style={{ paddingTop: '40px' }}>
        <HanBokDate ref={ref} />
      </div>
      <S.ContextContainer>
        <S.TitleBox>
          평범한 한복데이트는 그만! 고퀄리티
          <br />
          한복대여 체험단 모집
        </S.TitleBox>
        <S.ProgressBox>모집중</S.ProgressBox>
        <S.DescBox>
          <div>제공내역</div>
          <div>한국 개량한보고 3SET</div>
        </S.DescBox>
        <S.DescBox>
          <div>지원인원</div>
          <div>83 명</div>
        </S.DescBox>
        <S.DescBox style={{ marginBottom: '25px' }}>
          <div>모집인원</div>
          <div>50 명</div>
        </S.DescBox>
        <S.DescBox>
          <div>신청기간</div>
          <div>12.01 ~ 12.15</div>
        </S.DescBox>
      </S.ContextContainer>
      <S.MockDataContainer>
        한복(韓服)은 한민족의 전통의상을 말한다. 북한에서는 "조선옷"이라고
        부르나 본질은 동일하다. "한복"에 대하여 흔히 보통 '조선 후기'의 복식만을
        떠올리는 경우가 많지만, 엄밀히 말해서 한복은 특정 시기의 특정 복식이
        아닌 "한민족의 전통의상" 그 자체를 가리킨다. 즉 시대의 흐름에 따라
        형태가 변해온 다양한 전통의상들을 모두 가리키며, 이러한 의상들은 시대의
        유행과 타국과의 문화교류에 따른 상호작용으로 타국에 미치거나 타국의
        요소를 받아들이며 지속적으로 변천해왔다.[1] 그러나 현재 대한민국에서
        인식되는 한복에 대한 주된 고정관념은 어디까지나 조선 후기의 것에
        지나치게 국한되어 있으며 그 정보의 질과 양도 다른 시대에 비해 월등하다.
        그렇기에 이 문서에서 설명하는 대부분의 정보들 또한 조선 후기식 의복에
        집중되어있으며, 그 이전의 옷들은 "고대한복" 또는 "삼국시대옷", "조선
        전기 한복" 같은 식으로 구분되어 따로 정리되어지는 경우가 많다.[2] 그
        시대의 한복에 대한 자세한 정보는 전통 한복의 역사 참고 현대 대한민국에서
        한복은 생활복의 성격을 잃고 행사용의 성격으로써 그 명맥을 유지하고 있다.
        한복은 시대에 따라 다양한 양식들이 있지만 주로 조선 말기 이후의 변형된
        양식만을 고수하고 있으며[3] 실생활용으로 개발된 개량한복은 여러
        문제점들을 보이면서 사장된 실정이다. 그나마 전통에 대한 관심과 고증이
        상승하여 조금씩 개선되고 있다지만 아직까진 갈 길이 멀다.[4] 그래도 한복
        문화는 급격한 서구화로 인해 비록 주류에서 밀려났지만 지속적으로 유지 및
        변화하고 있으며, 전통이란 정체성을 떠나 다양한 소재와 디자인들을 통해 그
        영역을 넓혀가려는 시도가 계속되고 있다.
        <br />
        원래 성별과 상관없이 귀고리까지 착용하는 것이 기본 착장이었다.[5] 귀고리
        유물은 선사시대부터 삼국시대까지 골고루 나타나며 조선시대에서도 성별을
        불문하고 귀를 뚫고 귀고리를 착용했다.세종실록 3권, 세종 1년 1월 6일 신해
        4번째기사를 봐도 알 수 있는데, 사대부 자손들이 귀고리를 착용했으며
        금이나 은을 써도 법에 저촉되지 않음을 알 수 있다. 그러다 선조
        5년(1572)에 젊은 남자로 한정해 귀고리를 금지시킨다. 선조실록 6권, 선조
        5년 9월 28일 신해 두 번째 기사 이후 귀를 뚫는 귀고리가 아닌, 귓바퀴에
        거는 귀걸이가 등장했다.[6] 선조실록 186권, 선조 38년 4월 19일 계해 두
        번째기사에 '귀고리를 건 노파'가 언급되므로 여자까지 귀고리를 금지당한 건
        아니었다. 그런데 선조 30년(1597)에 남자의 귀 뚫은 자국을 보고 조선인인지
        왜적인지 구분한다는 기록이 있다. 선조 5년에 남자들의 귀고리를
        금지시켰음에도 오랜 풍습을 쉽게 바꿀 수는 없었던 모양이다. 아니면 법으로
        금지되기 전에 귀를 뚫었던 사람이거나. 선조실록 93권, 선조 30년 10월 4일
        신유 여섯 번째기사 밑의 실루엣 문단에서 설명하겠지만 남녀노소를 불문하고
        하의를 크고 풍성하게, 전체적으로 봤을 때 A라인 처럼 만드는 특징이 있다.
        조선시대 양반가에서는 3~5개 정도의 치마를 껴입었고 그 이상도 가능하다.
        다른건 몰라도 미의식만은 복식사에서 한민족만큼 동형성을 지킨 민족도
        드물다.
      </S.MockDataContainer>
    </S.MainContainer>
  )
}

export default Assignment2
