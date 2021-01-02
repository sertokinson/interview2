import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';
import SyntaxHighlighter from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";

const {Paragraph, Text, Title} = Typography;

export default class Hibernate extends React.Component {
    render() {
        return (
            <Typography>
                <Title>Сессия</Title>
                <Paragraph style={{fontSize: 20}}>
                    Объект Hibernate Session является связью между кодом java приложения и hibernate. Это основной интерфейс для выполнения операций с базой данных. Жизненный цикл объекта session связан с началом и окончанием транзакции. Этот объект предоставляет методы для CRUD (create, read, update, delete) операций для объекта персистентности. С помощью этого экземпляра можно выполнять HQL, SQL запросы и задавать критерии выборки.
                </Paragraph>
                <Title>Кеш</Title>
                <Title level={2}>Кеш первого уровня</Title>
                <Paragraph style={{fontSize: 20}}>
                    Hibernate использует кэширование, чтобы сделать наше приложение быстрее. Кэш Hibernate может быть очень полезным в получении высокой производительности приложения при правильном использовании. Идея кэширования заключается в сокращении количества запросов к базе данных.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Кэш первого уровня Hibernate связан с объектом Session. Кэш первого уровня у Hibernate  включен по умолчанию и не существует никакого способа, чтобы его отключить. Однако Hibernate предоставляет методы, с помощью которых мы можем удалить выбранные объекты из кэша или полностью очистить кэш.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Любой объект закэшированный в session не будет виден другим объектам session. После закрытия объекта сессии все кэшированные объекты будут потеряны.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    С объектом Session, а точнее с persistence context, в Hibernate всегда связан кэш первого уровня. При помещении объекта в persistence context, то есть при его загрузке из БД или сохранении, объект так же автоматически будет помещён в кэш первого уровня и это невозможно отключить. Соответственно, при запросах того же самого объекта несколько раз в рамках одного persistence context, запрос в БД будет выполнен один раз, а всё остальные загрузки будут выполнены из кэша.
                </Paragraph>
                <Title level={2}>Кеш второго уровня</Title>
                <Paragraph style={{fontSize: 20}}>
                    Один раз, попав в кэш второго уровня объект-сущность, используется на всем протяжении жизни объекта sessionFactory, т.е. область действия кэша  — вся наша программа, а если быть точнее, то, как вы настроите свой кэш, так он себя и поведет. Это также означает, что если фабрика сессий закроется, весь кэш ассоциированный с ней «умрет» и кэш менеджер тоже выключится.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    В отличие от кэша первого уровня кэш второго уровня нужно включать непосредственно в настройках Hibernate, и он реализуется провайдером,  сторонней библиотекой кэшем.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li>Кэш первого уровня в первую очередь кэширует сущности, но поддерживает опционально кэш запросов.</li>
                        <li>Всякий раз когда сессия Hibernate пытается загрузить сущность, самым первом местом где она будет ее искать это кэшированная копия сущности из кэша первого уровня (ассоциированный с частичной сессией).</li>
                        <li>Если кэшированная копия сущности присутствует в кэше первого уровня, она вернется как результат метода load().</li>
                        <li>Если не найдена в кэше первого уровня, то ищется в кэше второго уровня (если он включен).</li>
                        <li>Если в кэше второго уровня имеется кэшированная сущность, она вернется как результат метода load(). Но, прежде чем вернуть сущность, она сохранится в кэше первого уровня так же, поэтому следующий вызов метода загрузки сущности вернет сущность из кэша первого уровня и больше не понадобится искать ее в кэше второго уровня опять.</li>
                        <li>Если же сущность не была найдена ни в кэше первого уровня, ни в кэше второго уровня, то выполнится запрос в БД и сущность сохранится в обоих кэшах, прежде чем вернется как результат вызова метода load().</li>
                        <li>Кэш второго уровня  сам следит за обновлениями сущностей из кэша, если модификации были выполнены через Session API.</li>
                    </ul>
                </Paragraph>
                <Title>Состояния объектов</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text strong>Transient</Text>: состояние, при котором объект никогда не был связан с какой-либо сессией и не является персистентностью. Этот объект находится во временном состоянии. Объект в этом состоянии может стать персистентным при вызове метода save(), persist() или saveOrUpdate(). Объект персистентности может перейти в transient состоянии после вызова метода delete().</Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text strong>Persistent</Text>: когда объект связан с уникальной сессией он находится в состоянии persistent (персистентности). Любой экземпляр, возвращаемый методами get() или load() находится в состоянии persistent.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text strong>Detached</Text>: если объект был персистентным, но сейчас не связан с какой-либо сессией, то он находится в отвязанном (detached) состоянии. Такой объект можно сделать персистентным используя методы update(), saveOrUpdate(), lock() или replicate(). Состояния transient или detached так же могут перейти в состояние persistent как новый объект персистентности после вызова метода merge().
                </Paragraph>
                <Title>Проблема N+1</Title>
                <Paragraph style={{fontSize: 20}}>
                    Проблема N + 1 возникает, когда фреймворк доступа к данным выполняет N дополнительных SQL-запросов для получения тех же данных, которые можно получить при выполнении одного SQL-запроса. Чем больше значение N, тем больше запросов будет выполнено и тем больше влияние на производительность.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    решение заключается в добавлении JOIN FETCH к запросу
                </Paragraph>
                <Title>Подключение по шагам</Title>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li>подключить зависимости</li>
                        <li>настроить SessionFactory для подключения к БД</li>
                        <li>создал сущности entity таблицы бызы данных</li>
                    </ul>
                </Paragraph>
                <Title>Уровни изоляции транзакций</Title>
                <Paragraph style={{fontSize: 20}}>
                    Сами транзакции особых объяснений не требуют, транзакция — это N (N≥1) запросов к БД, которые выполнятся успешно все вместе или не выполнятся вовсе. Изолированность же транзакции показывает то, насколько сильно влияют друг на друга параллельно выполняющиеся транзакции.
                    Выбирая уровень транзакции, мы пытаемся прийти к консенсусу в выборе между высокой согласованностью данных между транзакциями и скоростью выполнения этих самых транзакций.
                </Paragraph>
                <Title level={2}>Read uncommitted</Title>
                <Paragraph style={{fontSize: 20}}>
                    Уровень, имеющий самую плохую согласованность данных, но самую высокую скорость выполнения транзакций. Название уровня говорит само за себя — каждая транзакция видит незафиксированные изменения другой транзакции (феномен грязного чтения).
                </Paragraph>
                <Title level={2}>Read committed</Title>
                <Paragraph style={{fontSize: 20}}>
                    Для этого уровня параллельно исполняющиеся транзакции видят только зафиксированные изменения из других транзакций. Таким образом, данный уровень обеспечивает защиту от грязного чтения.
                    Но не избавляет от так называемого феномена неповторяющегося чтения, когда мы видим обновленные и удаленные строки (UPDATE, DELETE), и феномен чтения фантомов, когда мы видим добавленные записи (INSERT).
                </Paragraph>
                <Title level={2}>Repeatable read</Title>
                <Paragraph style={{fontSize: 20}}>
                    Уровень, позволяющий предотвратить феномен неповторяющегося чтения. Т.е. мы не видим в исполняющейся транзакции измененные и удаленные записи другой транзакцией. Но все еще видим вставленные записи из другой транзакции. Чтение фантомов никуда не уходит.
                </Paragraph>
                <Title level={2}>Serializable</Title>
                <Paragraph style={{fontSize: 20}}>
                    Уровень, при котором транзакции ведут себя как будто ничего более не существует, никакого влияния друг на друга нет. В классическом представлении этот уровень избавляет от эффекта чтения фантомов.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Мы получаем максимальную согласованность данных, никакие лишние данные не зафиксируются. Цена за это медленная скорость транзакций из-за частых lock'ов поэтому при плохой архитектуре приложения это может сыграть с Вами злую шутку.
                </Paragraph>
                <Title>Transactional propagation</Title>
                <Title level={2}>REQUIRED</Title>
                <Paragraph style={{fontSize: 20}}>
                    Spring проверяет наличие активной транзакции, а затем создает новую, если ничего не существует. В противном случае бизнес-логика добавляется к текущей активной транзакции
                </Paragraph>
                <Title level={2}>SUPPORTS</Title>
                <Paragraph style={{fontSize: 20}}>
                    Spring сначала проверяет, существует ли активная транзакция. Если транзакция существует, то будет использоваться существующая транзакция. Если транзакции нет, она выполняется без транзакции
                </Paragraph>
                <Title level={2}>MANDATORY</Title>
                <Paragraph style={{fontSize: 20}}>
                    если есть активная транзакция, то она будет использоваться. Если нет активной транзакции, Spring выдает исключение
                </Paragraph>
                <Title level={2}>NEVER</Title>
                <Paragraph style={{fontSize: 20}}>
                    Spring выдает исключение, если есть активная транзакция
                </Paragraph>
                <Title level={2}>NOT_SUPPORTED</Title>
                <Paragraph style={{fontSize: 20}}>
                    Spring сначала приостанавливает текущую транзакцию, если она существует, затем бизнес-логика выполняется без транзакции.
                </Paragraph>
                <Title level={2}>REQUIRES_NEW</Title>
                <Paragraph style={{fontSize: 20}}>
                    Spring приостанавливает текущую транзакцию, если она существует, а затем создает новую
                </Paragraph>
                <Title level={2}>NESTED</Title>
                <Paragraph style={{fontSize: 20}}>
                    Spring проверяет, существует ли транзакция, а затем, если да, отмечает точку сохранения. Это означает, что если выполнение нашей бизнес-логики вызывает исключение, транзакция откатывается до этой точки сохранения. Если нет активной транзакции, она работает как REQUIRED
                </Paragraph>
            </Typography>)
    }
}