import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';

const {Paragraph} = Typography;

export default class HATEOAS extends React.Component {
    render() {
        return (
            <Typography>
                <Paragraph style={{fontSize: 20}}>
                    Термин HATEOAS означает фразу «Hypermedia As The Engine Of Application State» (Гипермедиа как двигатель состояния приложения)
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    HATEOAS позволяет вам не только отправлять данные, но и указывать связанные действия
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Когда вы отправляете этот запрос для получения данных учетной записи, вы получаете оба:
                    <ul>
                        <li>Номер счета и данные баланса</li>
                        <li>Ссылки, которые обеспечивают действия, чтобы сделать депозит/снятие/перевод/закрытие</li>
                    </ul>
                </Paragraph>
            </Typography>)
    }
}