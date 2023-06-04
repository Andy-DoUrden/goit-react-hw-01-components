import styled from '@emotion/styled';

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  margin: 20px auto 0 auto;
  padding: 20px 0;
  /* background-color: #fff; */
  border-radius: 15px;
  overflow: hidden;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #fff;
  border: 2px solid grey;
  border-radius: 15px;
  box-shadow: 0 5px 5px #d0d0d0;
`;

const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'red';
    }
  }};
`;

const Avatar = styled.img`
  display: block;
  margin-left: 20px;
  border-radius: 10px;
  background-color: black;
`;

const Name = styled.p`
  display: inline-block;
  margin-left: 20px;
`;

export { Container, Item, Status, Avatar, Name };
