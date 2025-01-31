import Link from 'next/link'
import { Button } from '../ui/button'

export const Header = () => {
  return (
    <header className="h-14 border-b border-gray flex items-center justify-between px-5">
      <Link href="/ja">PatronBox</Link>
      <Button asChild>
        <Link href="/ja/sign-in">ログイン</Link>
      </Button>
    </header>
  )
}
