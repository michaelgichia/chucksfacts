/*
 * HomePage
 *
*/

import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Column } from 'components/Layout';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import { readCategories } from './actions';
import { avatar } from './constants';
import { color } from 'utils/constants';
import { Card, Description } from './elements';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
	state = {
		filters: '',
	};

	componentDidMount() {
		this.props.readCategories();
	}

	render() {
		const { categories, isFetching } = this.props;
		return (
			<div>
				<Description>Explore funny, chronicle curated Chuck Norris fun facts.</Description>
				{categories.length > 0 ? (
					<Row>
						{categories.map((category, index) => (
							<Column key={category}>
								<Link
									to={{
										pathname: '/jokes/random',
										search: `?category=${category}`,
									}}
								>
									<Card style={{ backgroundColor: `${color[index]}` }}>
										<h1>{category}</h1>
										<p>explore</p>
									</Card>
								</Link>
							</Column>
						))}
					</Row>
				) : (
					<p style={{ width: '100%', textAlign: 'center' }}>loading...</p>
				)}
			</div>
		);
	}
}
const mapStateToProps = ({ homePage }) => ({
	categories: homePage.categories,
	isFetching: homePage.isFetching,
});

const mapDispatchToProps = dispatch => ({
	readCategories: () => dispatch(readCategories()),
});

const withReducer = injectReducer({ key: 'homePage', reducer });
const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);
export default compose(
	withReducer,
	withConnect,
)(HomePage);