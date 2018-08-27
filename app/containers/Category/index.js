/**
 *
 * Category
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import { readCategory } from './actions';
import chuckimage from 'images/chuck-norris.png';
import { CategoryCard, Wrapper, ButtonWrapper, Loading } from './elements';

/* eslint-disable react/prefer-stateless-function */
export class Category extends React.Component {
  state = {
    current: 0,
    disabledPrev: false,
  };

  async componentDidMount() {
    const {
      readCategory,
      clearCategory,
      location: { search },
    } = this.props;
    await readCategory(search, true);
    await readCategory(search);
    await readCategory(search);
  }

  _next = current => {
    this.props.readCategory(this.props.location.search);
    this.setState({ current: current + 1 });
  };

  _handleRenderFaccts = (current, category) => {
    if (category.length < 1) {
      return 'loading...';
    }
    const cat = category[current];
    cat.label =
      cat.category && cat.category[0] ? cat.category[0] : 'Chuck Norris';
    return cat;
  };

  render() {
    const { category } = this.props;
    const { current, disabledPrev } = this.state;
    const fact = this._handleRenderFaccts(current, category);
    return (
      <Wrapper>
        <CategoryCard
          style={{ backgroundColor: fact.color ? fact.color : '#001F3F' }}
        >
          <div style={{ height: 75 }} />
          <img src={chuckimage} />
          <div>
            {fact === 'loading...' ? (
              <Loading>{fact}</Loading>
            ) : (
              <React.Fragment>
                <h3>{fact.value}</h3>
                <p className="label"> - {fact.label} </p>
              </React.Fragment>
            )}
          </div>
          <ButtonWrapper>
            <button
              disabled={!!(current < 1)}
              type="button"
              onClick={() => this.setState({ current: current - 1 })}
            >
              Previous
            </button>
            <button
              disabled={!!(current >= category.length - 1)}
              type="button"
              onClick={() => this._next(current)}
            >
              Next
            </button>
          </ButtonWrapper>
        </CategoryCard>
      </Wrapper>
    );
  }
}

Category.propTypes = {
  readCategory: PropTypes.func.isRequired,
  category: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ category }) => ({
  category: category.category,
  isFetching: category.isFetching,
});

const mapDispatchToProps = dispatch => ({
  readCategory: (query, newCategory) =>
    dispatch(readCategory(query, newCategory)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'category', reducer });

export default compose(
  withRouter,
  withReducer,
  withConnect,
)(Category);
