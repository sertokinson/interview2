import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';
import SyntaxHighlighter from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";

const {Paragraph, Text} = Typography;

export default class JMS extends React.Component {
    render() {
        return (
            <Typography>
                <Paragraph style={{fontSize: 20}}>
                    JMS (Java Message Service) является стандартом обмена сообщениями между приложениями. Java приложения, выполненные по технологии Java SE (standalone) или Java EE (WEB) могут создавать, отправлять и получать JMS сообщения. Программное обеспечение, используемое для передачи сообщений между приложениями по стандарту JMS, формирует очереди сообщений queue.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Отправка сообщений java-приложениями выполняется в асинхронном режиме, т.е. процедура не ждет ответа от получателя. В качестве получателей сообщений, организующих очереди (queue), может быть либо программное обеспечение типа WebSphere MQ, связывающее приложения через канал обмена сообщениями, либо WEB-контейнер типа JBoss, GlassFish, обеспечивающих обмен сообщениями между приложениями контейнера, либо по каналам Интернета с использованием JNDI.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Получение сообщений java-приложением осуществляется либо по «подписке» (технология «издатель-подписчик»), либо из очереди («точка-точка»). Для получения сообщений по подписке необходимо должным образом подключиться к соответствующей очереди. При появлении в очереди сообщений они отправляются всем подписчикам. В модели «точка-точка» для получения сообщений необходимо периодически подключаться к соответствующей очереди и читать в ней сообщения.
                </Paragraph>
            </Typography>)
    }
}