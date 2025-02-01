import Link from 'next/link'
import { HiPlusCircle } from 'react-icons/hi'
import { Button } from '../ui/button'

export const Header = () => {
  return (
    <header className="h-16 border-b border-gray flex items-center justify-between px-5">
      <Link href="/ja">PatronBox</Link>
      <div className="flex items-center gap-x-6">
        <Link
          href="/ja/select-media"
          className="flex flex-col items-center"
        >
          <HiPlusCircle size={30} />
          <span className="text-xs">投稿</span>
        </Link>
        <Button asChild>
          <Link href="/ja/sign-in">ログイン</Link>
        </Button>
      </div>
    </header>
  )
}
