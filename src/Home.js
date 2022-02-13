import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { userCreators } from "./redux/modules/dust";

const Home = () => {
  const dispatch = useDispatch();
  const realTimeDust = useSelector(state => state.dust);
  const [dustToggle, setDustToggle] = useState(false);

  const getCapitalCheck = () => {
    dispatch(userCreators.realTimeDustMiddleWare());
    setDustToggle(!dustToggle);
  };

  React.useEffect(() => {}, [realTimeDust]);

  return (
    <>
      <OutWrap>
        <Title>수도권 미세먼지 현황</Title>
        <ButtonGrounp>
          <button onClick={getCapitalCheck}>실시간 현황확인</button>
        </ButtonGrounp>
        <InnerWrap>
          {dustToggle && (
            <CityDust>
              <ul>
                <li>측정시간 : {realTimeDust.dataTime}</li>
                <li>서울 : {realTimeDust.seoul}</li>
                <li>인천 : {realTimeDust.incheon}</li>
                <li>경기 : {realTimeDust.gyeonggi}</li>
              </ul>
            </CityDust>
          )}
        </InnerWrap>
      </OutWrap>
    </>
  );
};

const OutWrap = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
  background: #fff;
`;

const ButtonGrounp = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

const InnerWrap = styled.div`
  display: flex;
`;

const CityDust = styled.div`
  width: 40%;
  margin: auto;
  height: 100vh;
`;

export default Home;
