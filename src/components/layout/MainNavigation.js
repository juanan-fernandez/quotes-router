import styles from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';
export const MainNavigation = () => {
	return (
		<header className={styles.header}>
			<p className={styles.logo}>Quotes Master</p>
			<nav className={styles.nav}>
				<ul>
					<li>
						<NavLink activeClassName={styles.active} to='/quotes'>
							All Quotes
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName={styles.active} to='/quotes/add'>
							Add a Quote
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
