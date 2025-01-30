import { ButtonsOAuth } from './_components/buttons-oauth'
import { FormAuthEmail } from './_components/form-auth-email'

type Props = {
  mode: 'sign-in' | 'sign-up'
}

export const Authentication = ({ mode }: Props) => {
  return (
    <div className="border max-w-[400px] w-full mx-auto">
      <FormAuthEmail mode={mode} />
      <ButtonsOAuth mode={mode} />
    </div>
  )
}
