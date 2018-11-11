import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Table } from 'react-materialize';

import { getBooks, addBook, deleteBook } from "../../actions/books_actions.js";
import Book from '../../components/books/book';
import Header from '../../components/layouts/Header';
import Breadcrumb from '../../components/layouts/Breadcrumb';

class BooksList extends React.Component {

  render() {
    let bookList;
    if(this.props.books.length > 0) {
      bookList = this.props.books.map((book, index) => {
        return (
          <Book key={index} id={index} book={book} />
        );
      });
    }

    return (
      <div>
        <Header />
        <Breadcrumb action="books" />
        <div className="container">
          <br />
          <br />
          <Link to="/books/new" className="btn">添加绘本</Link>
          <Row>
            <Col m={12}>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col m={12}>
              <Table>
                <thead>
                  <tr>
                    <th>RAZ等级</th>
                    <th>蓝思等级</th>
                    <th>年龄段</th>
                    <th>绘本分类</th>
                    <th>系列名(links)</th>
                    <th>绘本名</th>
                    <th colSpan="3">更多操作</th>
                  </tr>
                </thead>

                <tbody>
                  {bookList}
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // this.props.search
  return {
    books: state.booksData.books
  };
}

// Any thing returned from this function will end up as props on the BookList component
const mapDispatchToProps = dispatch => {
  // Whenever search is called, the result should be passed to all reducers
  return {
    fetchBooks: () => {
      dispatch(getBooks())
    },
    addBook: () => dispatch(addBook()),
    deleteBook: () => dispatch(deleteBook())
  }; // this.props.doSearch will become the result of headSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);