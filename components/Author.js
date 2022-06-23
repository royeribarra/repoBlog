import styles from '../styles/blogCard.module.css'; 


export default function Author({author})
{

    return(

        <div className={styles.eachAuthor}>
            <img src={author.avatar.url} />
            <p>{author.name}</p>
        </div>
      
    )
}