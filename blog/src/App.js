import './App.css';
import { useState, useEffect } from 'react';

const BASE_API_URL= 'http://localhost:8081/api';

function App() {
  const [posts, setPosts] = useState(null);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  useEffect(() => {
    asyncLoadData()
  }, []);

  async function asyncLoadData(){
    const response = await fetch(BASE_API_URL + '/posts');
    const data = await response.json();
    setPosts(data);
    //console.log(data);
  }

  async function handleSubmit(){ 
    console.log(newPost)
    const response = await fetch(BASE_API_URL + '/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
    
    if(response.ok){
      setPosts([...posts, {response, createdAt: new Date()}]);
    }
    else{
      console.error('Error creating post', response);
    }

    setNewPost({ title: '', content: '' });
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center mb-5">Blog de Romain Charcosset</h1>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <input
                  type="text"
                  id="title"
                  className='form-control'
                  placeholder='Titre'
                  onChange={(event) => setNewPost({ ...newPost, title: event.target.value })}
                  required
                />
              </div>
              <div className='mb-3'>
                <textarea
                  id="content"
                  placeholder='Contenu'
                  className='form-control'
                  onChange={(event) => setNewPost({ ...newPost, content: event.target.value })}
                  required
                ></textarea>
              </div>
              <div className='text-center mb-5'>
                <button className='btn btn-primary' type="submit">Créer Post</button>
              </div>            
            </form>
          </div>
        </div>
      </div>

      <div>
        {posts && posts.map(post => (
          <div className="card mb-3" key={post._id}>
            <div className="card-header d-flex justify-content-between">
              <div><b>{post.title}</b></div>
              <div className="ms-auto small">{new Date(post.createdAt).toLocaleString()}</div>
            </div>
            <div className="card-body">
                {post.content.split('\n').map((line, index) => (
                  <div className="card-text row" key={index}>
                    {line}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* <div className="text-center fixed-bottom">
        <div
          className="rounded-pill px-3 py-1 mb-2 bg-info-subtle d-inline-block"
        >
          Créé par Romain Charcosset
        </div>
      </div> */}
    </div>
  );
}

export default App;
