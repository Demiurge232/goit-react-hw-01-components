import PropTypes from 'prop-types';
import {
  TableTransactionHistory,
  TitleHead,
  Th,
  Tr,
  Tbody,
  Td,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TableTransactionHistory>
      <TitleHead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </TitleHead>

      <Tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Tr key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        ))}
      </Tbody>
    </TableTransactionHistory>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
