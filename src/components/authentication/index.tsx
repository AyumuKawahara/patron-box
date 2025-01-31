import Link from 'next/link'
import { Separator } from '../ui/separator'
import { ButtonsOAuth } from './_components/buttons-oauth'
import { FormAuthEmail } from './_components/form-auth-email'

type Props = {
  mode: 'sign-in' | 'sign-up'
}

export const Authentication = ({ mode }: Props) => {
  return (
    <div className="border border-gray max-w-[500px] w-full mx-auto px-6 py-8 rounded-md flex flex-col gap-y-8">
      <FormAuthEmail mode={mode} />
      <Separator />
      <ButtonsOAuth mode={mode} />
      <Link
        href={mode === 'sign-in' ? '/ja/sign-up' : '/ja/sign-in'}
        className="text-center text-vividBlue underline"
      >
        {mode === 'sign-in'
          ? 'アカウントをお持ちでない方はこちら'
          : 'すでにアカウントをお持ちの方はこちら'}
      </Link>
    </div>
  )
}
