import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';

const {Paragraph, Title} = Typography;

export default class Stateless extends React.Component {
    render() {
        return (
            <Typography>
                <Title>Stateful</Title>
                <Paragraph style={{fontSize: 20}}>
                    Например наша система хранит в себе сессии пользователей, тем самым ответ на запрос пользователя зависит от состояния (сессии). При масштабировании сервиса, нам прийдется переносить все сессии на новый инстанс. Система стает сложной и не маневренной. Любой stateful сервис можно превратить в stateless, вынеся состояние в отдельный сервис и БД. Так мы можем вынести сессии во внешнее хранилище, сама система осталась stateful, но сам веб сервис stateless, тем самым мы можем просто его реплицировать.
                </Paragraph>
                <Title>Stateless</Title>
                <Paragraph style={{fontSize: 20}}>
                    Давайте вместо сессий использовать cookie файлы, таким образом мы передаем серверу не только сам запрос, но и всю необходимую информацию для его выполнения. Серверу больше не надо хранить в себе состояние. Stateless система зависит только от данных которые ей были переданы, а не от внутреннего состояния.
                </Paragraph>
                <Title>Еще один пример</Title>
                <Paragraph style={{fontSize: 20}}>
                    У нас есть интернет магазин — пока корзина пользователя хранится в памяти сервера, то это stateful. И у нас сразу возникают проблемы с масштабированием. Но когда мы выносим хранения корзины во внешний session storage — наш сервис становится stateless и мы можем спокойно его масштабировать, так как состояние хранится у нас в отдельном хранилище.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Это может быть и не преимуществом, а недостатком. Состояние один хрен существует, его необходимо использовать при обработке запросов, но в stateful веб приложении оно лежало "прямо здесь", на расстоянии одного обращения к hash map, а теперь будь любезен сбегать на диск и обратно. Зато, конечно, появляется некоторая надежность: если питание сервера вдруг пропадет, содержимое stateful корзины рассеется словно дым, а stateless корзинка сбегает после включения в СУБД и всё вернет в лучшем виде.
                </Paragraph>
            </Typography>)
    }
}