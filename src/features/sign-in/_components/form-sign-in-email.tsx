import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const FormSignInEmail = () => {
  return (
    <div>
      <p>メールアドレスでログイン</p>
      <div className="flex flex-col gap-y-1">
        <Label>メールアドレス</Label>
        <Input />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label>パスワード</Label>
        <Input />
      </div>
    </div>
  )
}
