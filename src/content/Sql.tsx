import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';
import SyntaxHighlighter from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";

const {Paragraph, Text, Title} = Typography;

export default class Sql extends React.Component {
    render() {
        return (
            <Typography>
                <Title>Создаём таблицу</Title>
                <Paragraph style={{fontSize: 20}}>
                    Для того, чтобы создать таблицу в <Text code>SQL</Text>, используется выражение <Text code>CREATE TABLE</Text>.
                    Он принимает в качестве параметров все колонки, которые мы хотим внести, а также их типы данных.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Давайте создадим табличку с названием "Months", в которой будет три колонки:
                    <ul>
                        <li><Text code>id</Text> - иными словами, порядковый номер месяца (целочисленный тип или int)</li>
                        <li><Text code>name</Text> - название месяца (строка или varchar(10) - 10 символов - максимальная длина строки)</li>
                        <li><Text code>days</Text> - число дней в конкретном месяце (целочисленный тип или int)</li>
                    </ul>
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"CREATE TABLE months (id int, name varchar(10), days int);"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Также, когда создаются таблицы, принято добавлять так называемый <Text code>primary key</Text>.
                    Это колонка, значения в которой уникальны. Чаще всего <Text code>primary key</Text> колонкой является <Text code>id</Text>,
                    но в нашем случае это может быть и name, так как имена всех месяцев уникальны.
                </Paragraph>
                <Title>Ввод данных</Title>
                <Paragraph style={{fontSize: 20}}>
                    Теперь давайте добавим пару месяцев в нашу табличку. Сделать это можно с помощью команды <Text code>INSERT</Text>.
                    Есть два разных способа использовать <Text code>INSERT</Text>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Первый способ не подразумевает указания названий колонок,
                    а лишь принимает значения в том порядке, в котором они указаны в таблице
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"INSERT INTO months VALUES (1,'January',31);"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Первый способ короче второго, однако если в будущем мы захотим добавить дополнительные колонки, все предыдущие запросы работать не будут.
                    Для решения данной проблемы следует использовать второй способ. Его суть в том, что перед вводом данных мы указываем названия колонок.
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"INSERT INTO months (id,name,days) VALUES (2,'February',29);"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    В случае, если мы не укажем одну из колонок, на её место будет записано
                    <Text code>NULL</Text> или заданное значение по умолчанию, но это уже совсем другая история.
                </Paragraph>
                <Title>Select</Title>
                <Paragraph style={{fontSize: 20}}>
                    Данный запрос используется в случае, если нам нужно показать данные в таблице.
                    Наверное, самым простым примером использования <Text code>SELECT</Text> будет следующий запрос:
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"SELECT * FROM characters"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Результатом данного запроса будет таблица со всеми данными в таблице characters.
                    Знак звёздочки (*) означает то, что мы хотим показать все столбцы из таблицы без исключений.
                    Так как в базе данных обычно больше одной таблицы, нам необходимо указывать название таблицы, данные из которой мы хотим посмотреть.
                    Сделать это мы можем, используя ключевое слово <Text code>FROM</Text>.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Когда вам нужны лишь некоторые столбцы из таблицы, то вы можете указать их имена через запятую вместо звёздочки.
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"SELECT name, weapon FROM characters"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Также иногда нам нужно отсортировать выводимые данные.
                    Для этого мы используем <Text code>ORDER BY</Text> "название столбца". <Text code>ORDER BY</Text> имеет два модификатора: <Text code>ASC</Text> (по возрастанию) (по умолчанию) и <Text code>DESC</Text> (по убыванию).
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"SELECT name, weapon FROM \"characters\" ORDER BY name DESC"}
                </SyntaxHighlighter>
                <Title>Where</Title>
                <Paragraph style={{fontSize: 20}}>
                    Теперь мы знаем, как показать только конкретные столбцы, но что если мы хотим включить в вывод лишь некоторые конкретные строки?
                    Для этого мы используем <Text code>WHERE</Text>. Данное ключевое слово позволяет нам фильтровать данные по определённому условию.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    В следующем запросе мы выведем только тех персонажей, которые в качестве оружия используют пистолет
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"SELECT * FROM characters WHERE weapon = 'pistol';"}
                </SyntaxHighlighter>
                <Title>HAVING</Title>]
                <Paragraph style={{fontSize: 20}}>
                    является указателем на результат выполнения агрегатных функций. Агрегатной функцией в языке SQL называется функция, возвращающая какое-либо одно значение по набору значений столбца. Такими функциями являются: SQL COUNT(), SQL MIN(), SQL MAX(), SQL AVG(), SQL SUM().
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Оператор <Text code>SQL HAVING</Text> аналогичен оператору <Text code>SQL WHERE</Text> за тем исключением, что применяется не для всего набора столбцов таблицы, а для набора созданного оператором <Text code>SQL GROUP BY</Text> и применяется всегда строго после него.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    вывести название исполнителей (Singer) число продаж альбомов (Sale) которого больше 2000000:
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"SELECT Singer, SUM(Sale) FROM Artists GROUP BY Singer HAVING SUM(Sale) > 2000000"}
                </SyntaxHighlighter>
                <Title>DISTINCT</Title>
                <Paragraph style={{fontSize: 20}}>
                    используется для указания на то, что следует работать только с уникальными значениями столбца.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    вывести количество уникальных исполнителей в таблице
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"SELECT COUNT(DISTINCT Singer) AS CountOfSingers FROM Artists"}
                </SyntaxHighlighter>
                <Title>И/или</Title>
                <Paragraph style={{fontSize: 20}}>
                    {"Условия в WHERE могут быть написаны с использованием логических операторов (AND/OR) и математические операторы сравнения (=, <, >, <=, >=, <>)."}
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    К примеру, у нас есть табличка, в которой записаны данные о 4 самых продаваемых музыкальных альбомах всех времён. Давайте выведем только те, жанром которых является рок, а продажи были меньше, чем 50 миллионов копий.
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"SELECT * FROM albums WHERE genre = 'rock' AND sales_in_millions <= 50 ORDER BY released"}
                </SyntaxHighlighter>
                <Title>In/Between/Like</Title>
                <Paragraph style={{fontSize: 20}}>
                    Условия в <Text code>WHERE</Text> могут быть записаны с использованием ещё нескольких команд, которыми являются:
                    <ul>
                        <li><Text code>IN</Text> - сравнивает значение в столбце с несколькими возможными значениями и возвращает <Text code>true</Text>, если значение совпадает хотя бы с одним значением</li>
                        <li><Text code>BETWEEN</Text> - проверяет, находится ли значение в каком-то промежутке</li>
                        <li><Text code>LIKE</Text> - ищет по шаблону</li>
                    </ul>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    К примеру, мы можем сделать запрос для вывода данных об альбомах в жанре <Text code>pop</Text> или <Text code>soul</Text>:
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"SELECT * FROM albums WHERE genre IN ('pop','soul');"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Если мы хотим вывести все альбомы, которые были выпущены в промежутке между 1975 и 1985 годом, мы можем использовать следующую запись:
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"SELECT * FROM albums WHERE released BETWEEN 1975 AND 1985;"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Также, если мы хотим вывести все альбомы, в названии которых есть буква 'R', мы можем использовать следующую запись:
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"SELECT * FROM albums WHERE album LIKE '%R%';"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Знак <Text code>%</Text> означает любую последовательность символов (0 символов тоже считается за последовательность).
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Если мы хотим вывести все альбомы, первая буква в названии которых - 'R', то запись слегка изменится:
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"SELECT * FROM albums WHERE album LIKE 'R%';"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    В <Text code>SQL</Text> также есть инверсия. Для примера, попробуйте самостоятельно написать <Text code>NOT</Text> перед любым логическим выражением в условии (NOT BETWEEN и так далее).
                </Paragraph>
                <Title>Функции</Title>
                <Paragraph style={{fontSize: 20}}>
                    В <Text code>SQL</Text> полно встроенных функций для выполнения разных операций. Мы же покажем вам только наиболее часто используемые:
                    <ul>
                        <li><Text code>COUNT()</Text> - возвращает число строк</li>
                        <li><Text code>SUM()</Text> - возвращает сумму всех полей с числовыми значениями в них</li>
                        <li><Text code>AVG()</Text> - возвращает среднее значение среди строк</li>
                        <li><Text code>MIN()/MAX()</Text> - возвращает минимальное/максимальное значение среди строк</li>
                    </ul>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Чтобы вывести год выпуска самого старого альбома, в таблице можно использовать следующий запрос:
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"SELECT MAX(released) FROM albums;"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Обратите внимание, что если вы напишете запрос, в котором вам, к примеру, нужно будет вывести имя и среднее значение чего-либо, то вы получите ошибку на выводе.
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"SELECT name, avg(age) FROM students;"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Чтобы избежать ошибки, вам следует добавить следующую строку:
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"GROUP BY name"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Причиной тому является, что запись avg(age) является совокупной (aggregated), и вам необходимо группировать значения по имени.
                </Paragraph>
                <Title>Вложенные Select</Title>
                <Paragraph style={{fontSize: 20}}>
                    В предыдущих шагах мы изучили, как делать простые вычисления с данными. Если мы хотим использовать результат данных вычислений, то часто нам необходимо использовать так называемые вложенные запросы. Допустим, нам необходимо вывести артиста, альбом и год выпуска самого старого альбома в таблице.
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"SELECT artist, album, released FROM albums;"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Также мы знаем, как получить самый ранний год из имеющихся:
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"SELECT MIN(released) FROM album;"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Объединить эти запросы можно в <Text code>WHERE</Text>:
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"SELECT artist,album,released FROM albums WHERE released = (SELECT MIN(released) FROM albums);"}
                </SyntaxHighlighter>
                <Title>Присоединение таблиц</Title>
                <Title level={2}>INNER JOIN</Title>
                <Paragraph style={{fontSize: 20}}>
                    В сложных базах данных чаще всего у нас есть несколько связанных таблиц. К примеру, у нас есть две таблицы: про видеоигры и про разработчиков.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    В таблице <Text code>video_games</Text> есть столбец <Text code>developer_id</Text>, в данном случае он является так называемым <Text code>foreign_key</Text>.
                    Чтобы было проще понять, <Text code>developer_id</Text> - это связывающее звено между двумя таблицами.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Если мы хотим вывести всю информацию об игре, включая информацию о её разработчике, нам необходимо подключить вторую таблицу. Чтобы это сделать, можно использовать <Text code>INNER JOIN</Text>:
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"SELECT video_games.name, video_games.genre, game_developers.name, game_developers.country \n" +
                    "FROM video_games \n" +
                    "INNER JOIN game_developers \n" +
                    "ON video_games.developer_id = game_developers.id;"}
                </SyntaxHighlighter>
                <Title level={2}>LEFT JOIN</Title>
                <Paragraph style={{fontSize: 20}}>
                    вывести, какие книги написали все авторы
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"SELECT * FROM Authors LEFT JOIN Books ON Authors.AuthorID = Books.BookID"}
                </SyntaxHighlighter>
                <Title>Псевдонимы</Title>
                <Paragraph style={{fontSize: 20}}>
                    Если вы взгляните на предыдущий пример, то вы заметите, что есть два столбца, названных одинаково: "name". Часто это может запутать. Решением данной проблемы являются псевдонимы. Они, к слову, помогают сделать название столбца красивее или понятнее в случае необходимости.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Чтобы присвоить столбцу псевдоним, можно использовать ключевое слово <Text code>AS</Text>:
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"SELECT games.name, games.genre, devs.name AS developer, devs.country \n" +
                    "FROM video_games AS games \n" +
                    "INNER JOIN game_developers AS devs \n" +
                    "ON games.developer_id = devs.id;"}
                </SyntaxHighlighter>
                <Title>Update</Title>
                <Paragraph style={{fontSize: 20}}>
                    Зачастую нам нужно изменить данные в таблице. В <Text code>SQL</Text> это делается с помощью <Text code>UPDATE</Text>.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Использование <Text code>UPDATE</Text> включает в себя:
                    <ul>
                        <li>выбор таблицы, в которой находится поле, которое мы хотим изменить</li>
                        <li>запись нового значения</li>
                        <li>использование <Text code>WHERE</Text>, чтобы обозначить конкретное место в таблице</li>
                    </ul>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Предположим, у нас есть таблица с самыми высокооценёнными сериалами всех времён. Однако у нас есть проблема: «Игра Престолов» обозначена как комедия и нам определённо нужно это изменить:
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"UPDATE tv_series SET genre = 'drama' WHERE name = 'Game of Thrones’;"}
                </SyntaxHighlighter>
                <Title>Удаление записей из таблицы</Title>
                <Paragraph style={{fontSize: 20}}>
                    Удаление записи из таблицы через <Text code>SQL</Text> - очень простая операция. Всё, что нужно - это обозначить, что именно мы хотим удалить.
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"DELETE FROM tv_series WHERE id = 4;"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Примечание: убедитесь, что используете <Text code>WHERE</Text>, когда удаляете запись из таблицы. Иначе вы удалите все записи из таблицы, сами того не желая.
                </Paragraph>
                <Title>Удаление таблиц</Title>
                <Paragraph style={{fontSize: 20}}>
                    Если мы хотим удалить все данные из таблицы, но при этом оставить саму таблицу, нам следует использовать команду <Text code>TRUNCATE</Text>
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"TRUNCATE TABLE table_name;"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    В случае, если мы хотим удалить саму таблицу, то нам следует использовать команду <Text code>DROP</Text>:
                </Paragraph>
                <SyntaxHighlighter language="sql" style={darcula}>
                    {"DROP TABLE table_name;"}
                </SyntaxHighlighter>
            </Typography>)
    }
}