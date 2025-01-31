import { Button } from '@/components/ui/button'
import Image from 'next/image'

type Props = {
  mode: 'sign-in' | 'sign-up'
}

export const ButtonsOAuth = ({ mode }: Props) => {
  return (
    <div className="flex flex-col gap-y-6">
      <p className="text-center">
        外部サービスで{mode === 'sign-in' ? 'ログイン' : '無料新規登録'}
      </p>
      <div className="flex flex-col gap-y-4">
        <Button className="bg-white hover:bg-white text-black border border-gray w-full gap-x-2">
          <Image
            src="/sns-icons/google-icon.png"
            alt="Google"
            width={87}
            height={87}
            className="w-6"
          />
          <span>Googleで{mode === 'sign-in' ? 'ログイン' : '登録'}</span>
        </Button>
        <Button className="w-full gap-x-2">
          <Image
            src="/sns-icons/x-icon-white.png"
            alt="X"
            width={2400}
            height={2453}
            className="w-4"
          />
          <span>X(Twitter)で{mode === 'sign-in' ? 'ログイン' : '登録'}</span>
        </Button>
      </div>
    </div>
  )
}
