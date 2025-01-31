'use client'

import { usePathname } from 'next/navigation'
import { FaCheck } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

const STEPS = [
  ['select-media'],
  ['upload-image', 'upload-video', 'write-article'],
  ['set-metadata'],
  ['pricing'],
  ['complete'],
]

export const StepperPostContent = () => {
  const pathname = usePathname()
  const pathnameWithoutLanguage = pathname.split('/')[2]
  const currentStepIndex = STEPS.findIndex((step) =>
    step.includes(pathnameWithoutLanguage),
  )

  return (
    <div className="flex gap-x-1 justify-center">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={String(index)}
          className={twMerge('flex gap-x-1 w-[150px]', index === 0 && 'w-fit')}
        >
          <div
            className={twMerge(
              'flex-grow bg-gray h-1 translate-y-5',
              index === 0 && 'hidden',
            )}
          />
          <div
            className={twMerge(
              'w-12 h-12 border-2 border-black/30 text-black/30 rounded-full flex items-center justify-center font-semibold',
              index < currentStepIndex && 'bg-black border-none text-white',
              index === currentStepIndex && 'border-black text-black',
            )}
          >
            {index < currentStepIndex ? <FaCheck size={16} /> : index + 1}
          </div>
        </div>
      ))}
    </div>
  )
}
