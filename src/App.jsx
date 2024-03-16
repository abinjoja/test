import React, { useState } from 'react';

const App = () => {
    const [director, setDirector] = useState("");
    const [movies, setMovies] = useState("");
    const [submissions, setSubmissions] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newSubmission = { director, movies };
        setSubmissions([...submissions, newSubmission]);
        setDirector("");
        setMovies("");
    }

    const handleDelete = (index) => {
        const updatedSubmissions = submissions.filter((_, i) => i !== index);
        setSubmissions(updatedSubmissions);
    }

    return (
        <section className='flex flex-col items-center    gap-5'>
           
                <h1 className='  text-3xl font-inter font-semibold'>Director and movies</h1>
               
            <div className=' '>
                
                <form onSubmit={handleSubmit} className=' grid grid-cols-10  gap-3 px-3 '>
                    <div className='col-span-4  '>
                        
                        <input className=' bg-slate-200 w-full'
                            type="text"
                            value={director}
                            onChange={(event) => setDirector(event.target.value)}
                            placeholder=" Director name"
                            id="director"
                        />
                    </div>
                    <div className=' col-span-4'> 
                        
                        <input
                        className=' bg-slate-200 w-full  '
                            type="text"
                            value={movies}
                            onChange={(event) => setMovies(event.target.value)}
                            placeholder="Movie"
                            id="movies"
                        />
                    </div>
                    <div>
                        <button
                         type="submit"
                         className='text-sm  bg-green-600 text-white p-1 w-[74px]'>
                            Add</button>
                    </div>
                </form>
            </div>

            
                    {submissions.map((submission, index) => (
                    
                    <div className='grid grid-cols-10  gap-3  '  key={index}>
                        
                        <p className='  border-2 border-black p-1 col-span-4  '> {submission.director}</p>
                        
                       
                        <p className=' border-2 border-black p-1 w-full col-span-4 '>{submission.movies}</p>
                       
                        <button 
                        onClick={() => handleDelete(index)}
                        className=' bg-red-500 text-white p-2 col-span-2' >
                            Remove
                            </button>
                    </div>
                    
                ))}
                
               
            </section>
       
    );
}

export default App;
