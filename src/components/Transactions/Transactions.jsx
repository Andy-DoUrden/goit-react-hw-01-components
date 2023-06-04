import PropTypes from 'prop-types';

import { Table, THead, TR, TH, TBody, TD } from './Transactions.styled';

export const Transactions = ({ transactions }) => {
  return (
    <Table>
      <THead>
        <TR>
          <TH>Type</TH>
          <TH>Amount</TH>
          <TH>Currency</TH>
        </TR>
      </THead>

      <TBody>
        {transactions.map(({ id, type, amount, currency }, index) => {
          return (
            <TR key={id}>
              <TD index={index}>{type}</TD>
              <TD index={index}>{amount}</TD>
              <TD index={index}>{currency}</TD>
            </TR>
          );
        })}
      </TBody>
    </Table>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
