import React from 'react'
import './blog.css'
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'


const Blog = () => {
  const blogHeading = "A lot is happening, We are blogging about it.";
  const articles = [
    {
      imgUrl: blog01,
      alt: 'blog01',
      title: 'GPT-3 and Open AI is the future. Let us explore how it is?',
      date: 'Sep 26, 2021'
    },
    {
      imgUrl: blog02,
      alt: 'blog02',
      title: 'GPT-3 and Open AI is the future. Let us explore how it is?',
      date: 'Sep 26, 2021'
    },
    {
      imgUrl: blog03,
      alt: 'blog03',
      title: 'GPT-3 and Open AI is the future. Let us explore how it is?',
      date: 'Sep 26, 2021'
    },
    {
      imgUrl: blog04,
      alt: 'blog04',
      title: 'GPT-3 and Open AI is the future. Let us explore how it is?',
      date: 'Sep 26, 2021'
    },
    {
      imgUrl: blog05,
      alt: 'blog05',
      title: 'GPT-3 and Open AI is the future. Let us explore how it is?',
      date: 'Sep 26, 2021'
    },
  ]

  return (
    <div className='gpt__blog section__padding'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>{blogHeading}</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__groupA'>
          <Article imgUrl={articles[0].imgUrl} alt={articles[0].alt} title={articles[0].title} date={articles[0].date} />
        </div>
        <div className='gpt3__blog-container__groupB'>
          {articles.slice(1).map((article, index) => (
            <Article key={index} imgUrl={article.imgUrl} alt={article.alt} title={article.title} date={article.date} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog