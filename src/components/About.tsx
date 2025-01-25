import {useState, useEffect} from 'react'
import "./../styles/About.css";

interface TItem {
  id: string;
  title: string;
  body: string;
}

const About = () => {
  const [data, setData] = useState<TItem[]>()
  const [nrItemsToShow, setNrItemsToShow] = useState(12);

  useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  const pagination = () => {
    setNrItemsToShow((prev) => prev + 12);
  }

  return (
    <div className="grid-container">
      {data && data.slice(0, nrItemsToShow).map((item) => (
        <div id = {item.id} className="grid-item">
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
      {data && nrItemsToShow < data.length && (
        <button onClick={pagination}>Show more</button>
      )}
    </div>
  )
}

export default About