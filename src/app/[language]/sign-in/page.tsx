import { Authentication } from '@/components/authentication'

export default function SignInPage() {
  return (
    <div className="py-[100px] px-4">
      <Authentication mode="sign-in" />
    </div>
  )
}
