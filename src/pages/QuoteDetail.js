import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';

export const QuoteDetail = ({ quotes }) => {
	const params = useParams();
	const match = useRouteMatch();
	const id = params.id;
	const quote = quotes.find(q => q.id.toString() === id);

	console.log(match);
	if (!quote) {
		return (
			<>
				<p>No quote found with the id: {id}</p>
			</>
		);
	}
	return (
		<>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={`${match.path}`} exact>
				<div className='centered'>
					<Link className='btn--flat' to={`${match.url}/comments`}>
						Load comments...
					</Link>
				</div>
			</Route>
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</>
	);
};
