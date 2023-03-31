import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  gap: 10px;
  padding: 0 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  :not(:last-child) {
    margin: 0 0 10px;
  }
`;

const whatStatus = props => {
  return props.isOnline ? 'green' : 'red';
};

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: auto 0;
  background-color: ${whatStatus};
`;

export const Avatar = styled.img``;

export const Name = styled.p`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #212121;
`;
