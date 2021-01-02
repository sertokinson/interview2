import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';

const {Paragraph, Title} = Typography;

export default class Abstract extends React.Component {
    render() {
        return (
            <Typography>
                <Title>Абстрактный класс</Title>
                <Paragraph style={{fontSize: 20}}>
                    Это класс, у которого не реализован один или больше методов (некоторые языки требуют такие методы помечать специальными ключевыми словами).
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Абстрактный класс нужен, когда нужно семейство классов, у которых есть много общего.
                    Конечно, можно применить и интерфейс, но тогда нужно будет писать много идентичного кода.
                </Paragraph>
                <Title>Интерфейс</Title>
                <Paragraph style={{fontSize: 20}}>
                    Это абстрактный класс, у которого ни один метод не реализован, все они публичные и нет переменных класса.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Интерфейс нужен обычно когда описывается только интерфейс (тавтология). Например, один класс хочет дать другому возможность доступа к некоторым своим методам, но не хочет себя «раскрывать». Поэтому он просто реализует интерфейс.
                </Paragraph>
            </Typography>)
    }
}