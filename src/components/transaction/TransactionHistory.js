import PropTypes from 'prop-types';
import '../transaction/transaction.css';

export default function TransactionHistory({ items }) {
  console.log(items);
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>

        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td> {type} </td>
            <td> {amount} </td>
            <td> {currency} </td>
          </tr>
        ))}
      </thead>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
