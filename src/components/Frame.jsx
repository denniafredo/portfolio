import { useState } from 'react'

/**
 * <img> dengan fallback placeholder bergaya terminal, supaya layout tidak
 * pernah "pecah" walau file gambarnya belum ditaruh di /public/images.
 */
export default function Frame({ src, alt, className = '', imgClassName = '', label, fit = 'cover' }) {
  const [failed, setFailed] = useState(!src)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`grid-noise flex items-center justify-center bg-noir-850 ${className}`}
      >
        <div className="px-4 text-center font-mono text-[0.6rem] leading-relaxed tracking-[0.18em] text-ink-500 sm:text-[0.7rem]">
          <span className="text-accent-500">[</span> NO_IMAGE{' '}
          <span className="text-accent-500">]</span>
          <div className="mt-1.5 text-ink-500/70">{label ?? src ?? 'asset missing'}</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`overflow-hidden bg-noir-850 ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className={`h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} ${imgClassName}`}
      />
    </div>
  )
}
