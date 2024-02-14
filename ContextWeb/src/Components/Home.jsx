import React from 'react'
import axios from 'axios'
import ListNews from './ListNews'
const Home = () => {
    const [characters, setCharacters] = useState([])
    
    useEffect(() => {
        getCharacters()
    }, [])
    
    const getCharacters = async () => {
        try {
            
            const response = await axios.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=Wd9fRmTqg5FxbSYpKaKPLZLk954zsReI') 
            setCharacters(response.data.results)
            
        } catch (error) {
            console.error(error)
        }
    }
    return (
    <>
        
        <h1>home page</h1>
        {listNews.map((news, index) => (
        <ListNews key={index} data={news.data} />
        
    ))}
        
    </>
    )
}

export default Home