import Avatar from '@mui/material/Avatar'
import { useSession, signOut, signIn } from 'next-auth/react'
import Image from 'next/image'
export default function Creds({}: any) {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <Avatar
          alt=""
          src={
            `${session.user?.image}` ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU'
          }
          className="rounded-full"
        />
        <button
          type="button"
          className="mr-2 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 "
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    )
  }
  return (
    <>
      <Avatar
        alt="..."
        src={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU'
        }
        className="rounded-full"
      />
      <button
        type="button"
        className="mr-2 mb-2 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  )
}
