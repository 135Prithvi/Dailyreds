import { getSortedPostsData } from '../lib/posts'
import vercel from '../public/zara-walker-TmqLWNY72rU-unsplash.jpg'
import Image from 'next/image'
import HomePage, { GradientBackground } from '../components/Hompage'

export async function getStaticProps() {
  const _allPostsData = getSortedPostsData()
  return {
    props: {
      _allPostsData,
    },
  }
}
// C:\Users\User\New folder (2)\NExT JS\nextjs\public\zara-walker-TmqLWNY72rU-unsplash.jpg
//  bg-conic-to-bl from-fuchsia-300 via-green-400 to-rose-700
export default function Home({}: any) {
  return (
    <>
      <div className="overflow-y-hidden">
        <div className="overflow-y-hidden">
          <HomePage>
            <div className="container  overflow-hidden p-8 text-gray-300 md:rounded-lg md:p-10 lg:p-12">
              <div className="flex justify-start">
                <h1 className="font-serif text-3xl font-medium">
                  {' '}
                  <img
                    src="/304971.svg"
                    alt="Vercel"
                    className="h-14 w-14 caret-white "
                  />
                </h1>
              </div>

              <div className="h-8 md:h-12"></div>

              <p className="max-w-5xl font-sans text-4xl font-bold text-gray-800 dark:text-gray-900 md:text-6xl lg:pr-24 lg:text-7xl">
                Spend less time searching and more time doing
              </p>
              <div className="h-10"></div>
              <p className="max-w-2xl font-serif text-xl text-gray-700 dark:text-gray-800 md:text-2xl">
                Imagine being able to spent less time...
              </p>

              <div className="h-12 md:h-16"></div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                  <p className="inline self-start bg-gradient-to-br from-green-500 to-green-700 bg-clip-text font-sans text-xl font-medium text-transparent dark:from-green-500 dark:to-green-400">
                    Simple and easy
                  </p>
                  <h2 className="text-4xl font-bold text-gray-800  dark:text-gray-900">
                    Discover for You
                  </h2>
                  <div className="h-3"></div>

                  <div className="grid grid-cols-2 gap-4 border-t border-gray-800 pt-8">
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-900">
                        Made with love
                      </p>
                      <div className="h-4"></div>
                      <p className="font-serif text-gray-700 dark:text-gray-800">
                        <strong>Next.js, TailwindCSS, and Stitches</strong>
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-900">
                        It's easy to build
                      </p>
                      <div className="h-4"></div>
                      <p className="font-serif text-gray-700 dark:text-gray-800">
                        <strong>Never Gonna Give You Up</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="-mr-24 rounded-lg bg-gradient-to-br from-gray-900 to-black sm:h-96 md:rounded-l-full"></div>
                </div>
              </div>

              <div className="h-16 md:h-20"></div>

              <p className="font-serif text-4xl">
                <span className="text-gray-400">If we work all together</span>

                <span className="text-gray-600">
                  consectetur adipisicing elit. Consectetur atque molestiae
                  omnis excepturi enim!
                </span>
              </p>

              <div className="h-28 md:h-36"></div>

              <div className="grid gap-5 md:grid-cols-3 ">
                <div className="flex-col rounded-lg bg-gradient-to-br from-gray-900 to-black p-8 py-16 shadow-2xl md:p-12">
                  <div className="sm:flex sm:justify-center">
                    <p className="flex h-14 w-14 items-center justify-center self-center rounded-full bg-green-800 text-4xl font-semibold text-green-400 shadow-lg">
                      1
                    </p>
                  </div>
                  <div className="h-6"></div>
                  <p className="font-serif text-3xl">
                    We build products with UX in mind
                  </p>
                </div>
                <div className="flex-col rounded-lg bg-gradient-to-b from-gray-900 to-black p-8 py-16 shadow-2xl md:p-12">
                  <div className="sm:flex sm:justify-center">
                    <p className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-800 text-4xl font-semibold text-indigo-400 shadow-lg">
                      2
                    </p>
                  </div>
                  <div className="h-6"></div>
                  <p className="font-serif text-3xl">
                    You can trust us to deliver super fast
                  </p>
                </div>
                <div className="flex-col rounded-lg bg-gradient-to-bl from-gray-900 to-black p-8 py-16 shadow-2xl md:p-12">
                  <div className="sm:flex sm:justify-center">
                    <p className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-800 text-4xl font-semibold text-teal-400 shadow-lg">
                      3
                    </p>
                  </div>
                  <div className="h-6"></div>
                  <p className="font-serif text-3xl">
                    We made it simple and easy to do
                  </p>
                </div>
              </div>

              <div className="h-20"></div>

              <div className="grid gap-8 md:grid-cols-3">
                <div className="flex flex-col justify-center md:col-span-2">
                  <p className="inline self-start bg-gradient-to-br from-teal-400 to-teal-600 bg-clip-text font-sans text-xl font-medium text-transparent">
                    We are humans
                  </p>
                  <h2 className="text-4xl font-bold">We could work together</h2>
                  <div className="h-6"></div>
                  <p className="font-serif text-xl text-gray-400 md:pr-10">
                    We are a team of people who love to build products
                  </p>
                  <div className="h-8"></div>
                  <div className="grid gap-6 border-t border-gray-800 pt-8 lg:grid-cols-3">
                    <div>
                      <p className="font-semibold text-gray-700 dark:text-gray-800">
                        Made with love
                      </p>
                      <div className="h-4"></div>
                      <p className="font-serif text-gray-400">
                        <strong>Next.js, TailwindCSS, and Stitches</strong>
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 dark:text-gray-800">
                        It's easy to build
                      </p>
                      <div className="h-4"></div>
                      <p className="font-serif text-gray-400">
                        <strong>Never Gonna Give You Up</strong>
                      </p>
                    </div>
                    <div>
                      <div className="h-4"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="-mr-24 rounded-lg bg-gradient-to-br from-gray-900 to-black sm:h-96 md:rounded-l-full   "></div>
                </div>
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
        </div>
      </div>
    </>
  )
}
