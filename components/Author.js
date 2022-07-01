import styles from '../styles/blogCard.module.css'; 


export default function Author({author})
{

    return(

        <div className={styles.eachAuthor}>
            <img src={author.avatar.url} alt={author.name}/>
            <p>{author.name}</p>
        </div>
      
    )
}