//import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
import image from './Alis-Profile.jpg';

const AboutUs = () => {
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
        <div className="AboutUs">
            <img src={image} alt="Ali's Profile" />
            <h1>About us</h1>
            <br></br>
            <h4>Education</h4>
                <h5>-Ali is a fourth year student at the University of Ottawa pursuing an Honours BSc in Computer Science with an Engineering Management and Entrepreneurship option (2023)</h5>
                <h5>-Ali is a fourth year student at the University of Ottawa pursuing a BASc in Software Engineering with an Engineering Management and Entrepreneurship option (2018-2022)</h5>
            <br></br>
            <h4>Previous Employment</h4>  
                <h5>JSI Telecom</h5>
                <h5>University of Ottawa Human Rights</h5>
                <h5>Royal Canadian Mounted Police</h5>
                <h5>Shared Services Canada</h5>
                <h5>University of Ottawa IT Services</h5>
            <br></br>
            <h4>Volunteer, interesting projects, aspirations, and contact</h4>

                <h5><a href="https://renfrew100.github.io/alis-portfolio/about/">Ali's Projects</a></h5>
                <h5><a href="https://renfrew100.github.io/alis-portfolio">Ali's Portfolio</a></h5>
                <h5>generation@spacefusion.org / <a href="https://www.linkedin.com/in/ali-aftab-muhammad/">Linkedln</a> / 613-323-2970</h5><br></br>

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
export default AboutUs;