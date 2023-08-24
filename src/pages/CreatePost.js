import React from 'react'


const CreatePost = () => {
    return (
        <form >
          <input type="title" placeholder='title' />
               
                 
          <input type="summary"placeholder='Summary'  />
        
          <input type="file" />
        
          <button style={{marginTop:'5px'}}>Create post</button>
        </form>
      );
}

export default CreatePost