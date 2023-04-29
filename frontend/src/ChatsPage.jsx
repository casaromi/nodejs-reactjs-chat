import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return(
      <div style={{ height: '100vh' }}>
        <PrettyChatWindow
          projectId='819359d3-54d4-4990-9c6a-fb21bd7cb3f1'
          username={props.user.username}
          secret={props.user.secret}
          style={{ height: '100%'}}
        />
      </div>
    )
  }
  
export default ChatsPage;
