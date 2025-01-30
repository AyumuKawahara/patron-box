import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type Props = {
  mode: 'sign-in' | 'sign-up'
}

export const FormAuthEmail = ({ mode }: Props) => {
  return (
    <form>
      <p>
        {mode === 'sign-in'
          ? 'メールアドレスでログイン'
          : 'メールアドレスで無料新規登録'}
      </p>
      <div className="flex flex-col gap-y-1">
        <Label>メールアドレス</Label>
        <Input />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label>パスワード</Label>
        <Input />
      </div>
      <Button className="w-full">ログイン</Button>
    </form>
  )
}
