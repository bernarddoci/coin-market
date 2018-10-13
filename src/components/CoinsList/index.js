import React from 'react';
import { Link } from 'react-router-dom';

const CoinsList = (props) => (
    <tbody>
        {
            props.list.map(coin => {
                return (
                    <tr className="coin-detail" key={coin}>
                        <td className="coin-item">{coin.rank}</td>
                        <td className="coin-item"><Link to={`/detail/${coin.id}`}><strong>{coin.name}</strong></Link></td>
                        <td className="coin-item">{coin.symbol}</td>
                        <td className="coin-item"><Link to={`/detail/${coin.id}`}>{Number((coin.quotes.USD.price).toFixed(2)).toLocaleString()}</Link></td>
                        <td className="coin-item">{(Number((coin.quotes.USD.volume_24h).toFixed(2))).toLocaleString()}</td>
                        <td></td>
                    </tr>
                );
            })
        }
    </tbody>
);

export default CoinsList;