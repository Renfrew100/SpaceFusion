//import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const GoalCollaboration = () => {
    //let name = 'mario';

  /*   const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'apple', id: 1},
        { title: 'Welcome', body: 'lorem ipsum...', author: 'apple', id: 2},
        { title: 'Hellos', body: 'lorem ipsum...', author: 'bananas', id: 3},

    ]); */

    ///const [blogs, setBlogs] = useState(null);
    //const [isPending, setIsPending] = useState(true);
   // const [error, setError] = useState(null);
    const { error, isPending, data: blogs } = useFetch("http://localhost:8000/blogs");

    //const[name, setName] = useState('mario'); 
   // const[age, setAge] = useState(25);

 /*     const handleClick = (e) => {
        console.log('hello,ninjas', e);
        setName('apple');
        setAge(30);
    } */

/*     const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    } */
 
 /*    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]); */
/* 
    useEffect(() => {
        setTimeout(() => {
        fetch('http://localhost:8000/blogss')
        .then(res => {
            console.log(res);
            if(!res.ok){
                throw Error('could not fetch the data for that resource');
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            setBlogs(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => { 
            console.log(err.message);
            setIsPending(false);
            setError(err.message);
        })
    },1000);
}, []); 
 */

   /*  useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]);

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    } */
    return(
        <div className="GoalCollaboration">
            <h1>Goal of Collaboration</h1>
            <br></br>
              <h4>They are multiple problems at NASA that needs to be solved  </h4>
                <h5>-Improvements in scientific research in the space sector, vehicles (spacecraft and launch vehicles)</h5>
            <h5>-Quality assurance codebase aspects of the space systems</h5>
            <h5>-Manufacturing improvements as well as implementing feedback / suggestions provided by the supervisor in charge (David Brock)</h5>

            <br></br>


            <br></br>

    {/*         <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author ==="apple")} title ="Mario's blogs"/>
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <button onClick={() => setName('luigi')}>Change name</button>
            <p>{name} is { age } years old</p>
            <button onClick={handleClick}>Click me </button>
            <button onClick={(e) =>  handleClickAgain('mario', e)}>Click me again </button>
         */}

       {/*      { error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs}/>} */}
        </div> 
    );
}
export default GoalCollaboration;