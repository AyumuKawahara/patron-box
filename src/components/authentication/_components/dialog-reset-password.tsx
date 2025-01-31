'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const DialogResetPassword = () => {
  return (
    <Dialog>
      <DialogTrigger className="text-vividBlue underline">
        パスワードをお忘れですか？
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>パスワードを再設定する</DialogTitle>
        </DialogHeader>
        <form action="" className="flex flex-col gap-y-4">
          <p>
            ご入力頂いたメールアドレス宛にパスワード再設定用のリンクを送付致します。
          </p>
          <div className="flex flex-col gap-y-1">
            <Label>メールアドレス</Label>
            <Input />
          </div>
          <Button className="w-full">パスワード再設定メールを送信</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
