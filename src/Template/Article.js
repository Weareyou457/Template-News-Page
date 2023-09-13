import React from 'react';
import './Article.css';
import MoreArticle from './MoreArticle';
import ArticleItem from './ArticleItem.json'

function Article() {
  return (
    <div className='articles'>
      <h2 className='title'>More Articles</h2>
      {
    ArticleItem.map((element,index) => {
      return(
      <MoreArticle
      key={index}
        title={element.Title}
        heading={element.Heading}
        date={element.Date}
        img={element.Poster}
      />
      )
    })
  }                                                     

    </div>
  )
}

export default Article;