import { StepperPostContent } from '@/components/stepper-post-content'
import type { ReactNode } from 'react'

export default function UploadContentLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="pt-[50px]">
      <StepperPostContent />
      {children}
    </div>
  )
}
