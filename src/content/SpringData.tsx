import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';

const {Paragraph, Title} = Typography;

export default class SpringData extends React.Component {
    render() {
        return (
            <Typography>
                <Paragraph style={{fontSize: 20}}>
                    {"Основное понятие в Spring Data — это репозиторий. Это несколько интерфейсов которые используют JPA Entity для взаимодействия с ней. Так например интерфейс\n" +
                    "public interface CrudRepository<T, ID extends Serializable> extends Repository<T, ID>\n" +
                    "обеспечивает основные операции по поиску, сохранения, удалению данных (CRUD операции)\n"}
                </Paragraph>
                <Title>Оптимистичная блокировка (Optimistic Lock)</Title>
                <Paragraph style={{fontSize: 20}}>
                    это стратегия, при которой вы читаете запись, обращаете внимание на номер версии и проверяете, не изменилась ли версия, прежде чем записывать запись обратно. Если запись грязная (т.е. версия отличается от вашей), вы прерываете транзакцию, и пользователь может ее перезапустить.
                </Paragraph>
                <Title>Песемистичная блокировка (Pesimistic Lock)</Title>
                <Paragraph style={{fontSize: 20}}>
                    это когда вы блокируете запись для исключительного использования, пока не закончите с ней.
                </Paragraph>
            </Typography>)
    }
}