import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';

const {Paragraph, Text, Title} = Typography;

export default class NoSql extends React.Component {
    render() {
        return (
            <Typography>
                <Paragraph style={{fontSize: 20}}>
                    NoSQL-базы оптимизированы для приложений, которые должны быстро, с низкой временной задержкой (low latency) обрабатывать большой объем данных с разной структурой
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text strong>Ключ-значение (Key-value)</Text> – наиболее простой вариант хранилища данных, использующий ключ для доступа к значению в рамках большой хэш-таблицы.
                    Такие СУБД применяются для хранения изображений, создания специализированных файловых систем, в качестве кэшей для объектов, а также в масштабируемых Big Data системах, включая игровые и рекламные приложения.
                    Наиболее известными представителями нереляционных СУБД типа key-value считаются Oracle NoSQL Database, Berkeley DB, MemcacheDB, Redis, Riak, Amazon DynamoDB, которые поддерживают высокую разделяемость, обеспечивая беспрецедентное горизонтальное масштабирование, недостижимое при использовании других типов БД.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text strong>Документно-ориентированное хранилище</Text>, в котором данные, представленные парами ключ-значение, сжимаются в виде полуструктурированного документа из тегированных элементов, подобно JSON, XML, BSON и другим подобным форматам.
                    Такая модель хорошо подходит для каталогов, пользовательские профилей и систем управления контентом, где каждый документ уникален и изменяется со временем.
                    Поэтому чаще всего документные NoSQL-СУБД используются в CMS-системах, издательском деле и документальном поиске.
                    Самые яркие примеры документно-ориентированных нереляционных баз данных – это CouchDB, Couchbase, MongoDB, eXist, Berkeley DB XML.
                </Paragraph>
                <Title>Достоинства</Title>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li><Text strong>линейная масштабируемость</Text> – добавление новых узлов в кластер увеличивает общую производительность системы;</li>
                        <li><Text strong>гибкость</Text> – позволяющая оперировать полуструктирированные данные, реализуя, в. т.ч. полнотекстовый поиск по базе;</li>
                        <li>возможность работать с разными представлениями информации, в т.ч. без задания схемы данных</li>
                        <li>высокая доступность за счет репликации данных и других механизмов отказоустойчивости, в частности, шаринга – автоматического разделения данных по разным узлам сети, когда каждый сервер кластера отвечает только за определенный набор информации, обрабатывая запросы на его чтение и запись. Это увеличивает скорость обработки данных и пропускную способность приложения.</li>
                        <li>производительность за счет оптимизации для конкретных видов моделей данных (документной, графовой, колоночной или «ключ‑значение») и шаблонов доступа;</li>
                        <li><Text strong>широкие функциональные возможности</Text> – собственные SQL-подобные языки запросов, RESTful-интерфейсы, API и сложные типы данных, например, map, list и struct, позволяющие обрабатывать сразу множество значений.</li>
                    </ul>
                </Paragraph>
                <Title>Недостатки</Title>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li>ограниченная емкость встроенного языка запросов. Например, HBase предоставляет всего 4 функции работы с данными (Put, Get, Scan, Delete), в Cassandra отсутствуют операции Insert и Join, несмотря на наличие SQL-подобного языка запросов. Для решения этой проблемы используются сторонние средства трансляции классических SQL-выражений в исполнительный код для конкретной нереляционной базы. Например, Apache Phoenix для HBase или универсальный Drill.</li>
                        <li>сложности в поддержке всех ACID-требований к транзакциям (атомарность, консистентность, изоляция, долговечность) из-за того, что NoSQL-СУБД вместо CAP-модели (согласованность, доступность, устойчивость к разделению) скорее соответствуют модели BASE (базовая доступность, гибкое состояние и итоговая согласованность). Впрочем, некоторые нереляционные СУБД пытаются обойти это ограничение с помощью настраиваемых уровней согласованности, о чем мы рассказывали на примере Cassandra. Аналогичным образом Riak позволяет настраивать требуемые характеристики доступности-согласованности даже для отдельных запросов за счет задания количества узлов, необходимых для подтверждения успешного завершения транзакции.</li>
                        <li>сильная привязка приложения к конкретной СУБД из-за специфики внутреннего языка запросов и гибкой модели данных, ориентированной на конкретный случай;</li>
                        <li>недостаток специалистов по NoSQL-базам по сравнению с реляционными аналогами.</li>
                    </ul>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Традиционные SQL-базы отлично справляются с обработкой строго типизированной информации не слишком большого объема.Однако, в случае обработки большого объема полуструктурированных и неструктурированных данных, т.е. Big Data, в распределенной системе следует выбирать из множества NoSQL-хранилищ, учитывая специфику самой задачи.
                </Paragraph>
            </Typography>)
    }
}