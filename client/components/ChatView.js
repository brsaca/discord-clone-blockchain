import styles from '../styles/chatView.module.css'
import ChatHeader from './ChatHeader'
import MessageForm from './MessageForm'

const ChatView = () => {

  return (
    <div className={styles.chatView}>
      <ChatHeader />
    {/*  <div className={styles.messagesContainer}>
        {formattedMessagesArray().map((message, index) => (
          <MessageCard
            key={index}
            avatar={message.avatar}
            sender={message.sender}
            timestamp={message.createdAt}
            content={message.content}
          />
        ))}
        </div> */}
        <MessageForm /> 
    </div>
  )
}

export default ChatView
