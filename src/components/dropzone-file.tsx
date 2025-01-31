'use client'

import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { twMerge } from 'tailwind-merge'

type Props = {
  mediaType: 'image' | 'video'
  className?: string
}

export const DropzoneFile = ({ mediaType, className }: Props) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    console.log('acceptedFiles:', acceptedFiles)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div
      {...getRootProps()}
      className={twMerge(
        'border-[1.5px] border-dashed border-black flex flex-col items-center justify-center max-w-[800px] h-[50vh] w-full cursor-pointer rounded-md',
        isDragActive && 'bg-black/10',
        className,
      )}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>ファイルをドロップしてください...</p>
      ) : (
        <div className="flex flex-col items-center">
          <p>
            アップロードする{mediaType === 'image' ? '画像' : '動画'}
            をドラッグ&ドロップ
          </p>
          <p>または</p>
          <p>
            このエリアをクリックして{mediaType === 'image' ? '画像' : '動画'}
            ファイルを選択
          </p>
        </div>
      )}
    </div>
  )
}
