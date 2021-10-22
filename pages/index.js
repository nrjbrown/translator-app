import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useCollection} from "react-firebase-hooks/firestore"
import {db} from "../firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 
import {useRef} from "react"

export default function Home() {
    
  
  const [snapshot, loading, error] = useCollection(
    db.collection('messages').orderBy('timestamp', 'asc')
    )

  const inputRef= useRef(null); 

  const onSubmit =(e)=> {
    e.preventDefault(); 

    db.collection("messages").add({
      message: inputRef.current.value,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    });

    inputRef.current.value=""; 
    
  }; 

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Translator App</title>
        <meta name="description" content="Created by NevDev" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Next.js"/>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Let's Build A Translation App</h1>

      
      
      {snapshot?.docs.map((doc) => (
        <div key ={doc.id}>
          <p>{doc.data().message}</p>
        </div>
      )
      )}

      <form>
        <input ref={inputRef} type="text" />
        <button onClick={onSubmit} type="submit">Send Message</button>
      </form>

      
</div>

  )
}

