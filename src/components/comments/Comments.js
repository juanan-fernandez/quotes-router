import { useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
	const [isAddingComment, setIsAddingComment] = useState(false);
	const [comments, setComments] = useState([]);
	const startAddCommentHandler = () => {
		setIsAddingComment(true);
	};

	const addCommentHandler = comment => {
		setComments(prev => [...prev, comment]);
	};

	const params = useParams();
	const id = params.id;

	return (
		<section className={classes.comments}>
			<h2>User Comments</h2>
			{!isAddingComment && (
				<button className='btn' onClick={startAddCommentHandler}>
					Add a Comment
				</button>
			)}
			{isAddingComment && <NewCommentForm id={id} onAddComment={addCommentHandler} />}
			<p>Comments...</p>
		</section>
	);
};

export default Comments;
