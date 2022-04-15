import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { useRouter } from 'next/router'



export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    },
    revalidate: 10, // In seconds
  }
}
export default function Post({ postData }) {
  const router = useRouter()
  const { pid } = router.query
;
    return (
      <Layout>
        <h1 className='font-bold text-center text-4xl my-5' >{postData.title}</h1>
        
        <h2 className='text-center font-sans font-bold'>{postData.date}</h2>
        <div className='mx-auto content-center my-10 border-8 px-10 py-5' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <p className='hidden'>Post: {pid}</p>
      </Layout>
    )
  }
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: "blocking"
    }
  }