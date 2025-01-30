import { Authentication } from '@/components/authentication'

export default function SignUpPage() {
  return (
    <div className="py-[100px] px-4">
      <Authentication mode="sign-up" />
    </div>
  )
}
