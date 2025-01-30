import { ButtonsOAuth } from '@/components/buttons-oauth'
import { FormSignInEmail } from '@/features/sign-in/_components/form-sign-in-email'

export default function SignInPage() {
  return (
    <div className="py-[100px]">
      <div className="border max-w-[400px] w-full mx-auto">
        <FormSignInEmail />
        <ButtonsOAuth mode="sign-in" />
      </div>
    </div>
  )
}
