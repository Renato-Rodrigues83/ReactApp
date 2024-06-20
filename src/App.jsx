import styles from './App.module.css';
import './global.css';
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

//author: {avatarUrl:"", name:"", role:""}
//publishedAt:Date
//Content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com//Renato-Rodrigues83.png',
      name: 'Renato Rodrigues',
      role: 'CEO @RKT'
    },
    content:[
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-10-17 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com//Renato-Rodrigues83.png',
      name: 'Renato Rodrigues',
      role: 'CEO @RKT'
    },
    content:[
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-10-17 20:00:00'),
  },
]

export function App() {

  return (
    <div>
      <Header />

        <div className={styles.wrapper}>
            <Sidebar />
          <div>
            {posts.map(post =>{
              return (
              <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
               />
              )
            })}
          </div>
            
             
        </div>
        
    </div>
  )
}


