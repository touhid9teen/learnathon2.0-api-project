import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Home() {
    const [isloading, setLoading] = useState(false);
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState('react')
    const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=react')
    const fetchNews = () => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setNews(data.hits))
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        fetchNews();
        setLoading(true);
    },[url]);
    const handleChange = (e)=>{
        setCategory(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setUrl(`http://hn.algolia.com/api/v1/search?query=${category}`)
    }
    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}  style={{textAlign: 'center', margin: '10px'}}>
                <input type="text" value={category} onChange={handleChange} style={{fontSize: "20px"}} />
                <button style={{fontSize: "20px"}}>Search</button>
            </form>
            {isloading && (
                <div>
                    <h1>News</h1>
                    {news.map((n, i) => (
                        <p key={i}>{n.title}</p>
                    ))}
                </div>
            )}
            {!isloading && <h2 style={{minHeight: '60vh'}}>Loading...</h2>}
            <Footer />
        </div>
    );
}
export default Home;
