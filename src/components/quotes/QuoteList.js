import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (listOfQuotes, ascending) => {
	return listOfQuotes.sort((q1, q2) => {
		if (ascending) {
			return q1.id > q2.id ? 1 : -1;
		} else {
			return q2.id > q1.id ? 1 : -1;
		}
	});
};

const QuoteList = props => {
	const history = useHistory();
	const location = useLocation();

	const queryParams = new URLSearchParams(location.search);
	const isOrderByAsc = queryParams.get('sort') === 'asc';
	const sortedQuotes = sortQuotes(props.quotes, isOrderByAsc);

	const sortHandler = () => {
		history.push({
			pathname: location.pathname,
			search: `sort=${isOrderByAsc ? 'desc' : 'asc'}`,
		});
	};
	return (
		<Fragment>
			<button onClick={sortHandler} className='btn'>
				Sort {`${isOrderByAsc ? 'descending' : 'ascending'} `}
			</button>
			<ul className={classes.list}>
				{sortedQuotes.map(quote => (
					<QuoteItem
						key={quote.id}
						id={quote.id}
						author={quote.author}
						text={quote.text}
					/>
				))}
			</ul>
		</Fragment>
	);
};

export default QuoteList;
