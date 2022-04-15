
import Avatar from '@mui/material/Avatar'
import { useSession, signOut, signIn } from 'next-auth/react'
import { getSortedPostsData } from '../lib/posts'
import Creds from '../components/Creds'
export async function getStaticProps() {
  const _allPostsData = getSortedPostsData()
  return {
    props: {
      _allPostsData,
    },
  }
}

export default function Home({ }: any) {
  return <></>

}
