import styled from '@emotion/styled';

const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`;

const THead = styled.thead``;

const TR = styled.tr``;

const TH = styled.th`
  background-color: rgb(0, 188, 213);
  color: white;
  width: 200px;
  padding-top: 10px;
  padding-bottom: 10px;

  &:first-of-type {
    border-top-left-radius: 10px 10px;
  }

  &:last-of-type {
    border-top-right-radius: 10px 10px;
  }
`;

const TBody = styled.tbody``;

const TD = styled.td`
  width: 200px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;

  background-color: ${props => {
    return props.index % 2 === 0 ? 'white' : 'rgb(236,241,244)';
  }};
`;

export { Table, THead, TR, TH, TBody, TD };
