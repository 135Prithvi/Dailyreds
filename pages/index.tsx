import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const _allPostsData = getSortedPostsData()
  return {
    props: {
      _allPostsData,
    },
  }
}

export default function Home({}: any) {
  return (
    <>
      <a className="container mt-28 block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          The next How to do is not How to do
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here We are making a difference between data and meaning full data
          ,both are not same.
        </p>
      </a>
    </>
  )
}
