import React from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';

class News extends React.Component {
  static propTypes={
    news: PropTypes.array.isRequired,
    name: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.array
    ])
  };
  render() {
  const elements =this.props.news.map(news=> <NewsItem key={news.id} title={news.title} description={news.description} /> );
    return (
      <div>
     
        {
            elements
        }
      </div>
    );
  }
}


export default News;
