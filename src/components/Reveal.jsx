import { useReveal } from '../hooks'

export default function Reveal({ as: Tag = 'div', variant = 'reveal', delay = 0, className = '', children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`${variant} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
