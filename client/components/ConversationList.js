import styles from '../styles/conversationList.module.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import friends from '../assets/icons/friends.svg'
import nitro from '../assets/icons/nitro.svg'
import DmCard from './DmCard'

import avatar1 from '../assets/avatar-1.webp'
import avatar2 from '../assets/avatar-2.png'
import avatar3 from '../assets/avatar-3.webp'
import avatar4 from '../assets/avatar-4.webp'

const dummyDms = [
    {
      id: 1,
      name: 'Pau',
      avatar: avatar1,
    },
    {
      id: 2,
      name: 'Yuka',
      avatar: avatar2,
    },
    {
      id: 3,
      name: 'Bren',
      avatar: avatar3,
    },
    {
      id: 4,
      name: 'Soto',
      avatar: avatar4,
    }
  ]

  
const ConversationList = () => {
  const [dms, setDms] = useState(dummyDms)

  return (
    <div className={styles.conversations}>
      <div className={styles.conversationListTop}>
        <input type='search' placeholder='Find or start a conversation' />
      </div>
      <div className={styles.conversationsContainer}>
        <div className={styles.elementsContainer}>
          <div className={styles.svgContainer}>
            <Image
              height={25}
              width={25}
              src={friends}
              className={styles.svg}
              alt='friends'
            />
          </div>
          <p>Friends</p>
        </div>
        <div className={styles.elementsContainer}>
          <div className={styles.svgContainer}>
            <Image
              height={25}
              width={25}
              src={nitro}
              className={styles.svg}
              alt='nitro'
            />
          </div>
          <p>Nitro</p>
        </div>
        <div className={styles.dmTitle}>DIRECT MESSAGES</div>
        {dms.map((dm, index) => (
          <DmCard
            key={index}
            name={dm.name}
            id={dm.id}
            avatar={
              dm.avatar ||
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU'
            }
            status='online'
          />
        ))}
      </div>
    </div>
  )
}

export default ConversationList
