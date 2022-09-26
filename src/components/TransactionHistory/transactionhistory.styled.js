import styled from 'styled-components';

export const TrHistory = styled.table`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  width: 500px;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 3px 3px 3px lightgrey;
  box-shadow: 0px 0px 6px 5px rgb(100 150 200 / 25%);
`;

export const Header = styled.thead`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const BgLine = styled.tr`
  :nth-child(2n) {
    background-color: #F5F5F5;
  }
`;

export const HeaderEl = styled.th`
  height: 30px;
  font-size: x-large;
  font-weight: 700;
  background-color: #55E4FF;
`;

export const TableEl = styled.td`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;
