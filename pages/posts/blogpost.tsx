import Link from 'next/link'
import { getSortedPostsData } from '../../lib/posts'

export async function getStaticProps() {
  const _allPostsData = getSortedPostsData()
  return {
    props: {
      _allPostsData,
    },
  }
}

export default function blogpost({ _allPostsData }: any) {
  return (
    <>
      <main className="mx-5 mt-6 flex max-w-full flex-wrap items-center justify-around sm:w-full ">
        <div className="container  flex w-full flex-1 flex-col items-center justify-center px-20 text-center ">
          <a className=" ">
            <section className=" ">
              {_allPostsData.map(({ id, date, title }: any) => (
                <div key={id}>
                  <div className="my-8 block max-w-full rounded-lg border-4 border-double border-sky-900 p-2  text-white shadow-md hover:cursor-pointer hover:bg-gray-100 dark:border-gray-700 dark:bg-cyan-500 dark:hover:bg-gray-700">
                    <Link href={`/posts/${id}`} key={date}>
                      <h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 hover:text-black dark:text-white">
                        {title}
                      </h5>
                    </Link>
                    <p className="font-normal text-gray-700 dark:text-black">
                      {date}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          </a>
        </div>
      </main>
    </>
  )
}
