import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';
import {darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

const {Paragraph, Text, Title} = Typography;

export default class PostgresSql extends React.Component {
    render() {
        return (
            <Typography>
                <Paragraph style={{fontSize: 20}}>
                    SQL – декларативный язык. Это означает, что когда мы
                    пишем инструкцию SQL, то описываем результат, который хотим получить,
                    но не указываем, как он должен быть получен.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    оптимизатор базы данных выбирает лучший
                    способ выполнить запрос.
                </Paragraph>
                <Title>Индексы</Title>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li>
                            индексы – «избыточные» объекты доступа к данным
                            базы данных; предназначены для ускорения выбора данных по определенным критериям.
                        </li>
                        <li>
                            индексы предоставляют дополнительные пути доступа к дан-
                            ным; они позволяют определить, какие значения хранятся в строках таблицы,
                            без необходимости чтения самой таблицы – так работает доступ на
                            основе индексов.
                        </li>
                        <li>
                            Если условие (или условия) фильтрации поддерживается индексом в таблице,
                            индекс можно использовать для доступа к данным из этой таблицы.
                            Алгоритм извлекает список указателей на блоки, содержащие строки со зна-
                            чениями, удовлетворяющими условию фильтрации, и только эти блоки чи-
                            таются из таблицы
                            <SyntaxHighlighter language="sql" style={darcula}>
                                CREATE INDEX Wheel_idx ON Wheel (CarId);
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="sql" style={darcula}>
                                SELECT * FROM Wheel WHERE CarId = 12
                            </SyntaxHighlighter>
                        </li>
                        <li>
                            индекс обновляется при обновлении данных таблицы.
                            Это приводит к накладным расходам для операций обновления
                        </li>
                    </ul>
                </Paragraph>
                <Title>Сканирование только индекса</Title>
                <Paragraph style={{fontSize: 20}}>
                    Если все запрашиваемые столбцы содержатся в условии фильтрации
                    <SyntaxHighlighter language="sql" style={darcula}>
                        SELECT CarId FROM Wheel WHERE CarId = 12
                    </SyntaxHighlighter>
                </Paragraph>
                <Title>B-деревья</Title>
                <Paragraph style={{fontSize: 20}}>
                    Такого типа индекс создается по умолчанию.
                    По сути бинарное дерево используется двиочный поиск со скрость logN.
                    B-деревья можно изменять без значительных накладных рас-
                    ходов. Когда вы вставляете запись, реструктуризация ограничена одним
                    блоком. Если емкость блока превышена, то он расщепляется на два блока,
                    и обновление распространяется на верхние уровни. Даже в худшем случае
                    количество измененных блоков не будет превышать глубины дерева.
                    Индекс на основе B-дерева можно создать для любого поряд-
                    кового типа данных; Иными словами, для типа данных должны быть определены операторы «больше»,
                    «больше или равно», «меньше», «меньше или равно» и «равно»
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    B-деревья не поддерживают поиск с оператором like.
                </Paragraph>
                <Title>HASH - индексы</Title>
                <Paragraph style={{fontSize: 20}}>
                    Хеш-индексы работают только с простыми условиями равенства. Планировщик запросов может применить
                    хеш-индекс, только если индексируемый столбец участвует в сравнении с оператором =. Создать такой
                    индекс можно следующей командой:
                    <SyntaxHighlighter language="sql" style={darcula}>
                        CREATE INDEX имя ON таблица USING HASH (столбец);
                    </SyntaxHighlighter>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Операции с хеш-индексами в настоящее время не проходят через WAL, так что после аварийной остановки
                    базы данных может потребоваться перестроить хеш-индексы командой REINDEX. Кроме того, изменения в
                    хеш-индексах после начальной копии не переносятся при потоковой или файловой репликации, так что в
                    последующих запросах они будут давать неправильные ответы. По этим причинам настоятельно
                    рекомендуется не использовать их.
                </Paragraph>
                <Title>Селективность индексов</Title>
                <Paragraph style={{fontSize: 20}}>
                    чем меньшее количество записей
                    соответствует одному значению индекса, тем ниже значение его селектив-
                    ности. Нам не нужно создавать индексы с высокой селективностью. для извлечения данных на основе
                    индекса в этом слу-
                    чае потребуется больше времени, чем при последовательном сканировании.
                    Поскольку оптимизатор PostgreSQL заранее определяет стоимость каждого
                    метода доступа, этот индекс никогда не будет использоваться, и произво-
                    дительность не пострадает. Однако нежелательно добавлять объект базы
                    данных, который требует места для хранения и дополнительное время для
                    обновления, но не дает никаких преимуществ
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Таким образом, наиболее эффективные индексы – уникальные.
                </Paragraph>
                <Title>Функциональный индекс</Title>
                <Paragraph style={{fontSize: 20}}>
                    Для запроса вида:
                    <SyntaxHighlighter language="sql" style={darcula}>
                    SELECT * FROM account WHERE lower(last_name) = 'daniels';
                    </SyntaxHighlighter>
                    Нужно воспользоваться функциональным индексом:
                    <SyntaxHighlighter language="sql" style={darcula}>
                    CREATE INDEX account_last_name_lower ON account (lower(last_name));
                    </SyntaxHighlighter>
                </Paragraph>
                <Title>Использование нескольких индексов</Title>
                <Paragraph style={{fontSize: 20}}>
                    Postgres может использовать результаты поиска по нескольким индексам,
                    создавая в оперативной памяти битовую карту блоков с подходящими запи-
                    сями, а затем применяя к ним операторы «или» либо «и». В результате оста-
                    ются только блоки, удовлетворяющие всем критериям поиска
                </Paragraph>
                <Title>Составные индексы</Title>
                <Paragraph style={{fontSize: 20}}>
                    Индекс созданный по нескольким колонкам. Как правило, индекс по столбцам (X, Y, Z) будет использоваться для поиска
                    по X, XY, XYZ и даже XZ, но не по Y и не по YZ
                </Paragraph>
                <Title>Покрывающие индексы</Title>
                <Paragraph style={{fontSize: 20}}>
                    Для получения столбцов которые не входят в индекс, нужно использовать покрывающий индекс, например:
                    <SyntaxHighlighter language="sql" style={darcula}>
                        CREATE INDEX flight_depart_arr_sched_dep_inc_sched_arr
                        ON flight (departure_airport,
                        arrival_airport,
                        scheduled_departure)
                        INCLUDE (scheduled_arrival);
                    </SyntaxHighlighter>
                </Paragraph>
                <Title>Частичные индексы</Title>
                <Paragraph style={{fontSize: 20}}>
                    Чтобы улучшить поиск по actual_departure,
                    можно создать индекс только для рейсов с фактическим значением
                    отправления, отличным от NULL:
                    <SyntaxHighlighter language="sql" style={darcula}>
                    CREATE INDEX flight_actual_departure_not_null ON flight (actual_departure)
                    WHERE actual_departure IS NOT NULL
                    </SyntaxHighlighter>
                    либо такой:
                    <SyntaxHighlighter language="sql" style={darcula}>
                        CREATE INDEX flight_canceled ON flight (flight_id)
                        WHERE status = 'Canceled';
                    </SyntaxHighlighter>
                </Paragraph>
                <Title>Когда индексы не используются</Title>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li>небольшая таблица полностью считывается в оперативную память;</li>
                        <li>Высокая селективность;</li>
                     es   <li>операции вставки и обновления замедляются, когда вместе с самой записью приходится обновлять еще и много индексов</li>
                    </ul>
                </Paragraph>
            </Typography>)
    }
}