import { FC } from 'react'
 
import "./Channels.scss"

interface ChannelsProps {
    channelImages: string[];
}

export const Channels: FC<ChannelsProps> = ({ channelImages }) => {
  return (
    <section className='channels'>
        <div className='channels__wrapper'>
            {channelImages.map((imageSrc, index) => (
                <div className='channels__item' key={index}>
                    <img className='channels__img' src={imageSrc} alt={`Channel ${index + 1}`} />
                </div>
            ))}
        </div>
    </section>
  )
}