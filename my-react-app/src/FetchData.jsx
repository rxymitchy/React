import React , {useEffect,  useState} from 'react'

// - 'useEffect(() => { /* Code */ }, [])' *runs on mount**.
// - 'useEffect(() => { /* Code */ }, [state])' **runs when state changes**.
// - 'useEffect(() => { return () => { /* Cleanup Code */ }}, [])' *runs on unmount**.


function FetchData() {

    const [data, setData] = useState(null); //initializes an empty data

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => response.json()) //makes sures the response in parsed in json
            .then((json) => setData(json));// appends the json data inside there
    }, []);

  return (
    /* this is the UI that runs until the data arrives
    you have to give an effect by refreshing the browser */
    <div>
      <p>{data ? data.title : "Loading..."}</p> 
    </div>
  )
}


export default FetchData
