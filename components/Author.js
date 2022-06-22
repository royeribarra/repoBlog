import styles from '../styles/Home.module.css'; 


export default function Author({author})
{

    return(

        <div>
            <img src={author.avatar.url} />
            <p>{author.name}</p>
        </div>
      
    )
}