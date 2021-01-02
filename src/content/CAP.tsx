import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';

const {Paragraph} = Typography;

export default class CAP extends React.Component {
    render() {
        return (
            <Typography>
                <Paragraph style={{fontSize: 20}}>
                    Распределенную систему возможно обеспечить в не более чем двух из 3-х состояний:
                    <ul>
                        <li>C (consistency) — согласованность. Каждое чтение даст вам самую последнюю запись.</li>
                        <li>A (availability) — доступность. Каждый узел (не упавший) всегда успешно выполняет запросы (на чтение и запись).</li>
                        <li>P (partition tolerance) — устойчивость к распределению. Даже если между узлами нет связи, они продолжают работать независимо друг от друга.</li>
                    </ul>
                </Paragraph>

            </Typography>)
    }
}