import { useState, useEffect } from 'react'

function ArticleList() {
    const [articleList, setArticleList] = useState([])

    useEffect(() => {
        fetch('http://localhost:8090/api/v1/articles')
            .then((res) => res.json())
            .then((res) => {
                console.log(res.data.articleList)
                setArticleList(res.data.articleList)
            })
    }, [])

    return (
        <>
            <ul>
                {articleList.map((article) => (
                    <li key={article.id}>
                        <span>{article.id}</span>
                        <span>{article.subject}</span>
                        <span>{article.content}</span>
                        <span>{article.author}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ArticleList
