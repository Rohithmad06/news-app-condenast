import React from 'react'
import classes from './listItem.module.css';

const ListItem = ({ article, onClick, id }) => {
    return (

        <div className={classes.container}>
            <div className={classes.textContainer}>
                <b className={classes.title} onClick={() => onClick(id)}>{article?.title}</b>
                <div className={classes.articleInfoContainer}>
                    {article?.author && <p className={[classes.description, classes.smallFont].join(' ')}>{article?.author}</p>}
                    {article?.source?.name && <p className={[classes.description, classes.smallFont].join(' ')}>{article?.source?.name}</p>}
                    {article?.publishedAt && <p className={[classes.description, classes.smallFont].join(' ')}>{new Date(article?.publishedAt)?.toLocaleDateString('en-US',
                        { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>}
                </div>
                <p className={classes.description}>{article?.description}</p>
            </div>
            <img
                className={classes.image}
                alt="logo"
                src={article?.urlToImage}
            />
        </div>
    )
}

export default ListItem