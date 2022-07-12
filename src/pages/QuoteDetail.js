import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { Link, Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';

export const QuoteDetail = ({ quotes }) => {
	const params = useParams();
	const id = params.id;
	const quote = quotes.find(q => q.id.toString() === id);

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
			<Link to={`/quotes/${id}/comments`}>Load comments...</Link>
			<Route path={`/quotes/:${id}/comments`}>
				<Comments />
			</Route>
		</>
	);
};
