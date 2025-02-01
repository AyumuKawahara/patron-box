import { DropzoneFile } from '@/components/dropzone-file'

export default function UploadImagePage() {
  return (
    <div className="flex flex-col items-center gap-y-10 pt-[50px] pb-16 md:pb-20">
      <h1 className="text-xl font-bold">投稿する画像をアップロード</h1>
      <DropzoneFile mediaType="image" />
    </div>
  )
}
