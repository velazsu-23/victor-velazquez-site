import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <span
          style={{
            color: '#FF4D1C',
            fontSize: 13,
            fontWeight: 700,
            fontFamily: 'monospace',
            letterSpacing: '-0.5px',
            lineHeight: 1,
          }}
        >
          VV
        </span>
      </div>
    ),
    { ...size }
  )
}
