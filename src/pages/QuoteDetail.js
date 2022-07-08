import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { Link, Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';

export const QuoteDetail = () => {
	const params = useParams();
	const id = params.id;

	return (
		<>
			<HighlightedQuote />
			<p>{id}</p>
			<Link to={`/quotes/${id}/comments`}>Load comments...</Link>
			<Route path={`/quotes/:${id}/comments`}>
				<Comments />
			</Route>
		</>
	);
};
