import React from 'react'
import classes from './newsDetail.module.css';
import { Modal } from 'antd';

const NewsDetail = ({ article, visible, onCancel }) => {

    //Modal to show more details on clicked article.
    
    return (
        <Modal visible={visible} footer={null} onCancel={onCancel} closable={false}
            className={classes.modal}
            width={1000}>
            <div className={classes.container}>
                <div className={classes.textContainer}>
                    <b className={classes.title}>{article?.title}</b>
                    <div className={classes.articleInfoContainer}>
                        {article?.author && <p className={[classes.description, classes.smallFont].join(' ')}>{article?.author}</p>}
                        {article?.source?.name && <p className={[classes.description, classes.smallFont].join(' ')}>{article?.source?.name}</p>}
                        {article?.publishedAt && <p className={[classes.description, classes.smallFont].join(' ')}>{new Date(article?.publishedAt)?.toLocaleDateString('en-US',
                            { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>}
                    </div>
                    <p className={[classes.description, classes.smallFont].join(' ')}>{article?.description}</p>
                </div>
                <img
                    className={classes.image}
                    alt="logo"
                    src={article?.urlToImage}
                />
            </div>
            <div className={classes.contentContainer}>
                <p>{article?.content}</p>
            </div>
        </Modal>
    )
}

export default NewsDetail