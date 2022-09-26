import styled from 'styled-components';


export const Prof = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 50px;
  border: 1px solid #e9eef3;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 5px rgb(100 150 200 / 25%);
`;

export const Description = styled.div`
  background-color: #fff;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 50%;
`;

export const UserName = styled.p`
 font-weight: 700;
  text-transform: uppercase;

  margin-bottom: 10px;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  color: #87888a;;
`;

export const Location = styled.p`
  margin-bottom: 30px;
  color: #87888a;
`;

export const Stats = styled.ul`
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  border-top: 1px solid #dddddd;
  background-color: #e9eef3;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px;
`;

export const Label = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
  color: #87888a;
`;

export const Text = styled.span`
  font-weight: 700;
`;



