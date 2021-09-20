import {useState} from "react"
import {useHistory} from "react-router-dom"

const Create = () => {
   
    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const [author,setAuthor]=useState("mario")
    const [isPending,setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const blog = {title,body,author}
        setIsPending(true)
        fetch("http://localhost:8000/blogs",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }). then(()=>{
            console.log("new blog added")
            setIsPending(false)
            //history.go(-1)
            history.push("/")
        })
        
    }



    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            required/>

            <label>Blog body:</label>
           <textarea 
           onChange={(e)=>setBody(e.target.value)}
           required>               
           </textarea>

           <label>Blog Author</label>
           <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
               <option value="mario">Mario</option>
               <option value="yoshi">Yoshi</option>
           </select>

           {!isPending && <button>Add button</button>}
           {isPending && <button>Adding blog...</button>}
            </form>
            
        </div>
     );
}
 
export default Create;