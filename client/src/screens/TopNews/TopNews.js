import React, { useEffect, useState, useRef } from 'react'
import List from '../../components/List/List';
import { error } from '../../components/Error/error';
import classes from './topNews.module.css';
import { Tag } from 'antd';
import NewsDetail from '../NewsDetail/NewsDetail';
const { CheckableTag } = Tag;

const TopNews = () => {

    //List view of most recent news.

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState({ number: 1 });
    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [showModal, setShowModal] = useState(null);
    const [selectedTags, setSelectedTags] = useState(["All"]);
    const filters = ["All", "Sports", "Entertainment", "Cinema", "Technology", "Politics"]

    const scrollRef = useRef();

    const fetchArticles = () => {

        //Fetch list of articles with a page size of 50.
        setLoading(true);
        let queryString = `http://localhost:5000/topnews?pageSize=${50}&page=${page.number}`
        if (selectedTags !== "All") queryString += `&q=${selectedTags}`

        fetch(queryString, {
            method: 'GET',
            "Content-Type": 'application/json'
        })
            .then(response => response.json())
            .then(response => {
                if (response.articles.length === 0) {
                    setHasMore(false);
                    return;
                }
                let tempArticles = [];
                if (page.number > 1) tempArticles = articles.concat(response.articles);
                else tempArticles = response.articles
                setArticles(tempArticles)
            })
            .catch(err => error(err))
            .finally(() => {
                setLoading(false);
                setLoadingMore(false)
            });
    }

    useEffect(() => {

        //Hit articles api after every change in page number
        fetchArticles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    useEffect(() => {

        //Set page number back to 1 after change in selected tags.
        setPage({ number: 1 });
        setHasMore(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTags])

    const loadMoreData = () => {

        //Load more data on scroll.
        if (loading) return;
        setLoadingMore(true);
        setPage(prevState => { return { ...prevState, number: prevState.number + 1 } });
    }
    const onArticleClick = (id) => {

        //Show modal on article click
        setShowModal(id.toString())
    }
    return <React.Fragment>
        <div className={classes.filtersContainer}>
            {filters.map(tag => <CheckableTag key={tag}
                checked={selectedTags?.indexOf(tag) > -1}
                onChange={() => setSelectedTags(tag)}>{tag}</CheckableTag>)}
        </div>
        <List articles={articles}
            loadMoreData={loadMoreData}
            hasMore={hasMore}
            loading={loading && !loadingMore}
            onClick={onArticleClick} />

        {!!showModal && <NewsDetail
            article={articles[Number(showModal)]}
            visible={!!showModal}
            onCancel={() => setShowModal(null)} />}
    </React.Fragment>

}

export default TopNews