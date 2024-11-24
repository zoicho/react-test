import { Link } from 'react-router'

export default function Index() {
  return (
    <div className={'w-full h-full flex flex-row justify-center flex-wrap gap-8 p-20'}>
      <Link to="/shuffle" className={'p-4 bg-gray-200 rounded-md'}>
        Shuffle Array items
      </Link>
    </div>
  )
}