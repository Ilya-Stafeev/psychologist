import { FC } from 'react'
import { Banner } from '../../../widgets/banner'
import { Experience } from '../../../widgets/experience'
import { Channels } from '../../../widgets/channels'

import { imagesChannels } from '../../../shared/images/channels';

export const Home: FC = () => {
  return (
    <div>
      <Banner />
      <Experience />
      <Channels channelImages={imagesChannels}/>
    </div>
  )
}