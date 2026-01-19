import Image from 'next/image'

const cloudConfigs = [
  { top: '10%', delay: '0s', width: '200px', height: '120px', opacity: 70, duration: 'cloud-delay-1' },
  { top: '20%', delay: '10s', width: '160px', height: '100px', opacity: 65, duration: 'cloud-delay-2' },
  { top: '30%', delay: '5s', width: '120px', height: '80px', opacity: 60, duration: 'cloud-delay-3' },
  { top: '50%', delay: '15s', width: '180px', height: '110px', opacity: 70, duration: 'cloud-delay-4' },
  { top: '60%', delay: '20s', width: '220px', height: '130px', opacity: 75, duration: 'cloud-delay-5' },
  { top: '70%', delay: '25s', width: '140px', height: '90px', opacity: 65, duration: 'cloud-delay-1' },
  { top: '80%', delay: '30s', width: '100px', height: '70px', opacity: 60, duration: 'cloud-delay-2' },
  { top: '15%', delay: '35s', width: '170px', height: '105px', opacity: 68, duration: 'cloud-delay-3' },
  { top: '45%', delay: '40s', width: '190px', height: '115px', opacity: 72, duration: 'cloud-delay-4' },
  { top: '75%', delay: '45s', width: '130px', height: '85px', opacity: 63, duration: 'cloud-delay-5' },
  { top: '25%', delay: '12s', width: '150px', height: '95px', opacity: 67, duration: 'cloud-delay-1' },
  { top: '55%', delay: '22s', width: '110px', height: '75px', opacity: 62, duration: 'cloud-delay-2' },
  { top: '35%', delay: '18s', width: '210px', height: '125px', opacity: 73, duration: 'cloud-delay-3' },
]

export function AnimatedClouds() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {cloudConfigs.map((cloud, index) => (
        <div
          key={index}
          className={`absolute animate-cloud ${cloud.duration}`}
          style={{
            top: cloud.top,
            left: '-200px',
            animationDelay: cloud.delay,
            width: cloud.width,
            height: cloud.height,
          }}
        >
          <Image
            src="/cloud.png"
            alt=""
            fill
            className="object-contain"
            style={{ opacity: cloud.opacity / 100 }}
            sizes={cloud.width}
          />
        </div>
      ))}
    </div>
  )
}
