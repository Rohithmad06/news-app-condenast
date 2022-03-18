import React from 'react';
import { List, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';


import ListItem from '../ListItem/ListItem';

const InfiniteListExample = (props) => {
    const { articles, loadMoreData, hasMore, loading, onClick } = props;

    return (
        <div
            id="scrollableDiv"
            style={{
                height: "90vh",
                overflow: 'auto',
                padding: '1rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderTop: '1px solid rgb(241, 241, 241)',
            }}
        >
            <InfiniteScroll
                dataLength={articles.length}
                next={loadMoreData}
                hasMore={articles.length < 100 && hasMore}
                loader={<Skeleton paragraph={{ rows: 2 }} active style={{ padding: "1.5rem" }} />}
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <List
                    dataSource={articles}
                    renderItem={(article, index) => (
                        <ListItem article={article}
                            key={index}
                            id={index}
                            onClick={onClick} />
                    )}
                    loading={loading}
                />
            </InfiniteScroll>
        </div>
    );
};
export default InfiniteListExample;
