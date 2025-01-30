type Props = {
  mode: 'sign-in' | 'sign-up'
}

export const ButtonsOAuth = ({ mode }: Props) => {
  return <div>外部サービスで{mode === 'sign-in' ? 'ログイン' : '登録'}</div>
}
