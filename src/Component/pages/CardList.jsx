import React, { useEffect , useState} from 'react';
import SearchBox from "./SearchBox";
import CardItem from "./CardItem";

const CardList = () => {
    const [monstersList, setmonstersList] = useState([]);
    const [newmonstersList, setnewmonstersList] = useState([]);
    useEffect(() => {
    const fetchData = async()=>{
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json();
        setmonstersList(data)  
        setnewmonstersList(data)     
    }
    fetchData();
    }, []);
    const handleSearch =(param)=>{
      const newmonsters = monstersList.filter((monster)=>{
        return monster.name.toLowerCase().includes(param.toLowerCase())
      })
      setnewmonstersList(newmonsters)
    }
  return<>
  <b className='text-center block text-8xl font-mono text-cyan-500 cursor-pointer'>Robots🤖</b>
  <br />
  <header className='w-full flex flex-row justify-center items-start'>
    <SearchBox method={handleSearch}/>
    </header>
    <main>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center gap-6">
        {newmonstersList.map((monster)=>{
            return <CardItem data={monster} key={monster.id}/>           
        })}
        </section>
    </main>
  </> 
}

export default CardList