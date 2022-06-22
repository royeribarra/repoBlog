import styles from '../../styles/Slug.module.css';
import {GraphQLClient, gql} from 'graphql-request';
import Author from '../../components/Author';


const graphcms = new GraphQLClient(
  "https://api-us-east-1.graphcms.com/v2/cl44y03tu24o201xl471z3j8e/master"
  );

const QUERY = gql`
    query Post($slug: String!){
        post(where: {slug: $slug}){
        id,
        title,
        slug,
        datePublished,
        authors{
                id,
                name,
                avatar{
                        url
                        },    
                posts{
                        id
                        },
                }
        content {
                html
                },
        coverPhoto{
                    id,
                    url
                    }
        }
    }
`;


const SLUGLIST = gql`
    {
        posts{
            slug
        }
    }
`;

export async function getStaticPaths(){
    const { posts } = await graphcms.request(SLUGLIST);
    return{
        paths: posts.map((post) => ({ params : {slug: post.slug }})),
        fallback:false,
    };
}

export async function getStaticProps({params}){
    const slug = params.slug;
    const data = await graphcms.request(QUERY, {slug});
    const post = data.post
    return{
    props:{
        post,
        },
    revalidate: 10, 
    };
}

export default function BlogPost({post}){
    return(

        <main className={styles.blog}>
                <h2 className={styles.title} >{post.title}</h2>
                <div className={styles.photoContainer}>
                <img src={post.coverPhoto.url} className={styles.coverPhoto} alt = {post.title} /> 
                </div>
                <div className={styles.content} dangerouslySetInnerHTML = {{__html: post.content.html}}></div>
                <div className={styles.authors}>
                                {post.authors.map((author) => 
                                    <Author 
                                        key={author.id}
                                        author={author}  
                                    />  
                                )}   
                        <h6 className={styles.date}> Escrito el {post.datePublished}</h6>
                </div>
        </main>
    )
}