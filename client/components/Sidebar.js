import styles from '../styles/sidebar.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import RoomAvatar from './RoomAvatar'

import avatar1 from '../assets/avatar-1.webp'
import avatar2 from '../assets/avatar-2.png'
import avatar3 from '../assets/avatar-3.webp'
import avatar4 from '../assets/avatar-4.webp'

const dummyChannels = [
  {
    roomId: 1,
    roomName: 'general',
    avatar: avatar1,
  },
  {
    roomId: 2,
    roomName: 'random',
    avatar: avatar2,
  },
  {
    roomId: 3,
    roomName: 'chill',
    avatar: avatar3,
  },
  {
    roomId: 4,
    roomName: 'buildspace',
    avatar: avatar4,
  }
]

const Sidebar = () => {
  const router = useRouter()
  const [channels, setChannels] = useState(dummyChannels)

  return (
    <div className={styles.wrapper}>
      {channels.map((channel, index) => (
        <RoomAvatar
          key={channel.roomId}
          id={channel.roomId}
          avatar={channel.avatar}
          name={channel.roomName}
        />
      ))}
    </div>
  )
}

export default Sidebar

