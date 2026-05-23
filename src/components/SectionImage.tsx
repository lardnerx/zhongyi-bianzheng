import { getImageUrl } from '../data/navigation'

interface SectionImageProps {
  prompt: string
  alt: string
  className?: string
}

export default function SectionImage({ prompt, alt, className = '' }: SectionImageProps) {
  return (
    <div className={`my-6 rounded-xl overflow-hidden shadow-md ${className}`}>
      <img
        src={getImageUrl(prompt)}
        alt={alt}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
    </div>
  )
}