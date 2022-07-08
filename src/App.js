import { Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';

import { MainNavigation } from './components/layout/MainNavigation';
import { Layout } from './components/layout/Layout';
import QuoteList from './components/quotes/QuoteList';
import QuoteForm from './components/quotes/QuoteForm';
import NoQuotesFound from './components/quotes/NoQuotesFound';
import { QuoteDetail } from './pages/QuoteDetail';

function App() {
	const [quotes, setQuotes] = useState([]);

	const addQuote = quote => {
		setQuotes(prev => [...prev, quote]);
	};

	return (
		<div>
			<MainNavigation />
			<Layout>
				<Switch>
					<Route path='/' exact>
						<Redirect to='/quotes' />
					</Route>
					<Route path='/quotes' exact>
						{quotes.length > 0 ? <QuoteList quotes={quotes} /> : <NoQuotesFound />}
					</Route>
					<Route path='/quotes/add' exact>
						<QuoteForm onAddQuote={addQuote} />
					</Route>
					<Route path='/quotes/:id'>
						<QuoteDetail />
					</Route>
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
