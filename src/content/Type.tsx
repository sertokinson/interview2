import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';

const {Paragraph, Text} = Typography;

export default class Type extends React.Component {
    render() {
        return (
            <Typography>
                <Paragraph style={{fontSize: 20}}>
                    Размер типы вычисляется как (2 в степени бит) деленое на 2 от отрицательных до положительных значений, 1 байте 8 бит
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                   <ul>
                       <li><Text code>byte</Text>: хранит целое число от -128 до 127 и занимает 1 байт</li>
                       <li><Text code>short</Text>: хранит целое число от -32768 до 32767 и занимает 2 байта</li>
                       <li><Text code>int</Text>: хранит целое число от -2147483648 до 2147483647 и занимает 4 байта</li>
                       <li><Text code>long</Text>: занимает 8 байт</li>
                       <li><Text code>float</Text>: хранит число с плавающей точкой и занимает 4 байта</li>
                       <li><Text code>double</Text>: хранит число с плавающей точкой и занимает 8 байт</li>
                   </ul>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    В Java параметр метода – всегда копия. Значит параметры передаются всегда по значению, просто это значение может быть ссылкой на объект. При входе в метод делается копия этого парамметра
                </Paragraph>
            </Typography>)
    }
}