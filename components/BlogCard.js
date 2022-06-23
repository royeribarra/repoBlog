import Link from 'next/link'
import styles from '../styles/blogCard.module.css'
import Author from './Author'

export default function BlogPost({
    title, 
    authors, 
    coverPhoto, 
    datePublished, 
    slug,
}){

    return(
        <div className = {styles.card}>
            <Link href = {"/posts/" + slug}>
                <div className={styles.imgContainer}>
                    <img className={styles.fotoPreviewArticulo} src = {coverPhoto.url} alt = "" />
                </div>
            </Link>
                <div className={styles.text}>
                    <h2>{title}</h2>
                    <div className={styles.details}>
                        <div className={styles.authors}>
                            {authors.map((author) => 
                                <Author 
                                    key={author.id} 
                                    author={author} 
                                />  
                            )}
                        </div>
                        <div className={styles.date}>
                            <h3 className={styles.dateInside}>Elaborado el {datePublished}</h3>
                        </div>
                    </div>
                </div>
        </div>
    )
}