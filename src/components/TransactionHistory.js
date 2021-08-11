import PropTypes from 'prop-types';

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
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
