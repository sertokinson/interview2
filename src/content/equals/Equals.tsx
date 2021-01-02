import React from 'react';
import 'antd/dist/antd.css';
import {Image, Typography} from 'antd';
import equals_1 from './equals-1.png';
import equals_2 from './equals-2.png';
import equals_3 from './equals-3.png';
import equals_4 from './equals-4.png';

const {Paragraph} = Typography;

export default class Equals extends React.Component {
    render() {
        return (
            <Typography>
                <Paragraph style={{fontSize: 20}}>
                    1. для одного и того-же объекта, хеш-код всегда будет одинаковым
                </Paragraph>
                <Image src={equals_1}/>
                <Paragraph style={{fontSize: 20}}>
                    2. если объекты одинаковые, то и хеш-коды одинаковые (но не наоборот)
                </Paragraph>
                <Image src={equals_2}/>
                <Paragraph style={{fontSize: 20}}>
                    3. если хеш-коды равны, то входные объекты не всегда равны (коллизия)
                </Paragraph>
                <Image src={equals_3}/>
                <Paragraph style={{fontSize: 20}}>
                    4. если хеш-коды разные, то и объекты гарантированно разные
                </Paragraph>
                <Image src={equals_4}/>
            </Typography>)
    }
}