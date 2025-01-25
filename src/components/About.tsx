import {useState, useEffect} from 'react'
import "./../styles/About.css";

interface TItem {
  id: string;
  title: string;
  body: string;
}

const About = () => {
  const [data, setData] = useState<TItem[]>()

  useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  return (
    <div className="grid-container">
      {data && data.map((item) => (
        <div id = {item.id} className="grid-item">
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}

export default About