import React, { Component } from "react";
import "../NewsItem.css";
import PropTypes from 'prop-types';

class NewsItem extends Component {
  
  constructor(props){
    super();
    console.log(props)
  }

  static propTypes={
    newsData: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    }).isRequired 
  }
  render() {
      const {title, description}=this.props.newsData;
    return (
      <div>
        <h1 className="title">{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
}
export default NewsItem;
