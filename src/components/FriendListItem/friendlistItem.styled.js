import styled from 'styled-components';

export const Item = styled.li`
   display: flex;
  width: 100%;
  gap: 15px;
  align-items: center;
  box-shadow: 3px 3px 3px lightgrey;
  border-radius: 5px;
  margin-bottom: 15px;
  box-shadow: 0px 0px 6px 5px rgb(100 150 200 / 25%);
`;

export const Status = styled.span`
  display: block;

  width: 15px;
  height: 15px;
  margin-left: 15px;
  border-radius: 50%;
  background-color: green;
   background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
 padding: 15px;
`;

export const Name = styled.p`
 width: 90px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

