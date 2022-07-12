import { useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = props => {
	const authorInputRef = useRef();
	const textInputRef = useRef();

	const [isDirty, setIsDirty] = useState(false);

	function uniqueID() {
		return Math.floor(Math.random() * Date.now());
	}

	function submitFormHandler(event) {
		event.preventDefault();

		const enteredAuthor = authorInputRef.current.value;
		const enteredText = textInputRef.current.value;

		// optional: Could validate here
		if (enteredAuthor.trim() === '' || enteredText.trim() === '') return;

		props.onAddQuote({ id: uniqueID(), author: enteredAuthor, text: enteredText });
		authorInputRef.current.value = '';
		textInputRef.current.value = '';
	}

	const focusFormHandler = () => {
		setIsDirty(true);
	};

	const finishEditingHandler = () => {
		setIsDirty(false);
	};

	return (
		<>
			<Prompt
				when={isDirty}
				message={location =>
					'Are you sure you want to leave? All the data will be lost.'
				}
			/>
			<Card>
				<form
					className={classes.form}
					onSubmit={submitFormHandler}
					onFocus={focusFormHandler}
				>
					{props.isLoading && (
						<div className={classes.loading}>
							<LoadingSpinner />
						</div>
					)}

					<div className={classes.control}>
						<label htmlFor='author'>Author</label>
						<input type='text' id='author' ref={authorInputRef} />
					</div>
					<div className={classes.control}>
						<label htmlFor='text'>Text</label>
						<textarea id='text' rows='5' ref={textInputRef}></textarea>
					</div>
					<div className={classes.actions}>
						<button onClick={finishEditingHandler} className='btn'>
							Add Quote
						</button>
					</div>
				</form>
			</Card>
		</>
	);
};

export default QuoteForm;
