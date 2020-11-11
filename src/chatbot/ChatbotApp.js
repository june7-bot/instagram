import React from "react";
import { Typography} from 'antd';
import  {SmileOutlined}  from '@ant-design/icons';
import Chatbot from './Chatbot/Chatbot'
const { Title } = Typography;

function ChatbotApp() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Title level={2} >도그블록 채팅봇&nbsp;<SmileOutlined /></Title>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>   
        <Chatbot />
      </div>
    </div>
  )
}

export default ChatbotApp
