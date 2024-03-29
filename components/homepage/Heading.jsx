import { Twemoji } from '@/components/Twemoji'
import { siteMetadata } from '@/data/siteMetadata'

export function Heading() {
  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      I'm <span className="font-medium">{siteMetadata.fullName}</span> - an open-minded{' '}
      <span className="font-medium">Software Engineer</span> in{' '}
      <span className="hidden font-medium">Ha Noi, VN</span>
      <span className="flag-vn align-middle">
        <Twemoji emoji="flag-vietnam" />
      </span>
    </h1>
  )
}
