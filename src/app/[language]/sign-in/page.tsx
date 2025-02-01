import { Authentication } from '@/components/authentication'

export default function SignInPage() {
  return (
    <div className="pt-[50px] pb-[100px] px-4">
      <Authentication mode="sign-in" />
    </div>
  )
}
