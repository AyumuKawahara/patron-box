import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CiImageOn } from 'react-icons/ci'
import { CiVideoOn } from 'react-icons/ci'
import { SlNote } from 'react-icons/sl'

export default function SelectMediaPage() {
  return (
    <div className="flex flex-col items-center gap-y-10 pt-[50px] pb-16 md:pb-20">
      <h1 className="text-xl font-bold">
        アップロードするコンテンツの形式を選択
      </h1>
      <div className="flex flex-col gap-y-4">
        <Button asChild>
          <Link href="/ja/write-article" className="flex items-center gap-x-2">
            <SlNote size={20} />
            <span>記事を書く</span>
          </Link>
        </Button>
        <Button asChild>
          <Link href="/ja/upload-image" className="flex items-center gap-x-2">
            <CiImageOn size={20} />
            <span>画像をアップロードする</span>
          </Link>
        </Button>
        <Button asChild>
          <Link href="/ja/upload-video" className="flex items-center gap-x-2">
            <CiVideoOn size={20} />
            <span>動画をアップロードする</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
