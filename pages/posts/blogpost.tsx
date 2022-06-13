import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { getSortedPostsData } from '../../lib/posts'
import HomePage, { GradientBackground }  from "../../components/Hompage";
export async function getStaticProps() {
  const _allPostsData = getSortedPostsData()
  return {
    props: {
      _allPostsData,
    },
  }
}

export default function blogpost({ _allPostsData }: any) {
  const { data: session } = useSession()

  if (session) {
    return (
      <><HomePage>
        <div className="mx-10 sm:mx-20 ">
          <div className="my-10 space-y-5 text-center sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-5 sm:space-y-0">
            {_allPostsData.map(({ id, date, title }: any) => (
              <>
                <Link href={`/posts/${id}`} key={title}>
                  <a className="text-md mx-2  mb-1 block rounded-lg bg-gradient-to-br from-green-400 to-blue-600 py-4  px-5 pr-4 pl-3 text-center font-medium text-black hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100 ">
                      {title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-100">
                      {date}
                    </p>
                  </a>
                </Link>
              </>
            ))}
          </div>
        </div>
        <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
        </HomePage>
      </>
    )
  }
  if (!session) {
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
}
