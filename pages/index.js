import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {GraphQLClient, gql} from 'graphql-request';
import BlogCard from "../components/BlogCard";
import Header from '../components/Header';

const graphcms = new GraphQLClient(
  "https://api-us-east-1.graphcms.com/v2/cl44y03tu24o201xl471z3j8e/master"
  );

const QUERY = gql`
{
  posts{
    id
    title
    datePublished
    slug
    content {
              html
            }
    authors{
            name
            avatar{
                  url
                  }
            posts{
                    id
                  }
            }
    coverPhoto{
              url
            }
    }
}
`;


export async function getStaticProps(){
  const{posts} = await graphcms.request(QUERY);
  return{
    props:{
      posts,
    },
    revalidate: 10, 
  };
}


export default function Home({posts}) {

  return (
    <div className={styles.container}>

      <Head>
        <title>Blog Repo</title>
        <meta name="description" content="Encuentra las últimas tendencias del ecommerce, servicio postventa, cambios y devoluciones tecnologíoa, statups y más temas relacionados a los servicios de Repo y a las mejores prácticas de servicio al cliente." />
        <link rel="icon" href="https://repo.com.pe/static/media/repologo.be247a6c.svg" />
      </Head>
      <main className={styles.main}>
      <h1 className={styles.tituloPrincipal}>Lo último del mercado</h1>
        <div className={styles.mainCards}>
      {posts.map((post) => (
        <BlogCard 
        title={post.title} 
        authors={post.authors} 
        coverPhoto={post.coverPhoto} 
        key={post.id} 
        datePublished={post.datePublished}
        slug={post.slug}
        />
      ))}
      </div>
      </main>

     
    </div>
  )
}
