import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { useState } from 'react';

import { MainNavigation } from './components/layout/MainNavigation';
import { Layout } from './components/layout/Layout';
import QuoteList from './components/quotes/QuoteList';
import QuoteForm from './components/quotes/QuoteForm';
import NoQuotesFound from './components/quotes/NoQuotesFound';
import { QuoteDetail } from './pages/QuoteDetail';
import { NotFound } from './pages/NotFound';

const testQuotes = [
	{ id: 'q123', author: 'Juanin', text: 'No por mucho madrugar amanece más temprano' },
	{
		id: 'q2333',
		author: 'Juanin',
		text: 'Ahí tiras un capazo pollas y no llega ninguna al suelo',
	},
];

function App() {
	const [quotes, setQuotes] = useState(testQuotes);
	const history = useHistory();
	const addQuote = quote => {
		setQuotes(prev => [...prev, quote]);
		history.push('/quotes');
	};

	return (
		<div>
			<MainNavigation />
			<Layout>
				<Switch>
					<Route path='/' exact>
						<Redirect to='/quotes' />
					</Route>
					<Route path='/quotes/add' exact>
						<QuoteForm onAddQuote={addQuote} />
					</Route>

					<Route path='/quotes' exact>
						{quotes.length > 0 ? <QuoteList quotes={quotes} /> : <NoQuotesFound />}
					</Route>
					<Route path='/quotes/:id'>
						<QuoteDetail quotes={quotes} />
					</Route>
					<Route path='*'>
						<NotFound />
					</Route>
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
