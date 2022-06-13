import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import HomePage, { GradientBackground }  from "../../components/Hompage";
export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
    revalidate: 10, // In seconds
  }
}
export default function Post({ postData }: any) {
  const router = useRouter()
  const { pid } = router.query
  const { data: session } = useSession()

  if (session) {
    return (
      <Layout>
        <h1 className="my-5 mx-20 border-b-2 pb-2 text-center text-xl font-bold sm:text-4xl">
          {postData.title}
        </h1>

        <h2 className="text-center font-sans font-bold">{postData.date}</h2>
        <div
          className="mx-10 my-10 content-center border-8 px-10 py-5 sm:mx-20"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        <p className="hidden">Post: {pid}</p>
      </Layout>
    )
  }
  return (
    <HomePage>
    <main className="mx-5 mt-10 items-center    justify-around text-center text-2xl sm:w-full ">
      <p className="font-sans text-xl font-bold ">Not signed in</p>{' '}
      <br />
      <button
        type="button"
        className="mr-2 mb-2 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2.5 text-center text-sm font-medium DARK:text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </main>
    <GradientBackground
      variant="large"
      className="fixed top-20 opacity-40 dark:opacity-60"
    />
    <GradientBackground
      variant="small"
      className="absolute bottom-0 opacity-20 dark:opacity-10"
    />
    </HomePage>
  )
}
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}
