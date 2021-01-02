import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';
import SyntaxHighlighter from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";

const {Paragraph, Text, Title} = Typography;

export default class Socket extends React.Component {
    render() {
        return (
            <Typography>
                <Title>Схема URL</Title>
                <Paragraph style={{fontSize: 20}}>
                    URL-адрес определяет уникальное расположение веб-ресурса и механизм его получения . При взаимодействии клиент-сервер мы чаще всего стремимся получить статические или динамические ресурсы через связанный с ними URL.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"http://localhost:8080/rest"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Схема URL WebSocket также не сильно отличается:
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"ws://localhost:8080/ws"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Вначале кажется, что единственная разница заключается в символах перед двоеточием, но это абстрагирует многое, что происходит под капотом. Давайте исследуем дальше.
                </Paragraph>
                <Title>Рукопожатие</Title>
                <Paragraph style={{fontSize: 20}}>
                    Рукопожатие относится к автоматическому способу согласования протокола связи между взаимодействующими сторонами . HTTP - это протокол без сохранения состояния, работающий в механизме запроса-ответа. На каждый HTTP-запрос устанавливается TCP-соединение с сервером через сокет.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Затем клиент ждет, пока сервер не ответит ресурсом или ошибкой. Следующий запрос от клиента повторяет все, как будто предыдущего запроса никогда не было.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    WebSocket работает совсем иначе, чем HTTP, и начинается с рукопожатия перед фактическим взаимодействием.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    В случае WebSocket клиент инициирует запрос протокола установления связи в HTTP, а затем ожидает, пока сервер не ответит, принимая обновление до WebSocket с HTTP .
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Конечно, поскольку подтверждение протокола происходит через HTTP, оно следует последовательности из предыдущей диаграммы. Но как только соединение установлено, клиент и сервер переключаются на WebSocket для дальнейшего взаимодействия.
                </Paragraph>
                <Title>Подключение</Title>
                <Paragraph style={{fontSize: 20}}>
                    Как мы видели в предыдущем подразделе, одно существенное различие между WebSocket и HTTP заключается в том, что WebSocket работает с постоянным TCP-соединением, в то время как HTTP создает новое TCP-соединение для каждого запроса.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Очевидно, что создание нового TCP-соединения для каждого запроса не очень производительно, и HTTP не знал об этом. Фактически, как часть HTTP / 1.1, постоянные соединения были введены для устранения этого недостатка HTTP.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Тем не менее, WebSocket был разработан с нуля для работы с постоянными TCP-соединениями .
                </Paragraph>
                <Title>Общение</Title>
                <Paragraph style={{fontSize: 20}}>
                    Преимущество WebSocket по сравнению с HTTP - это особый сценарий, который возникает из того факта, что клиент может общаться с сервером способами, которые были невозможны с помощью старого доброго HTTP.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Например, в HTTP обычно клиент отправляет этот запрос, а затем сервер отвечает запрошенными данными. Не существует универсального способа для сервера общаться с клиентом самостоятельно. Конечно, были разработаны шаблоны и решения, позволяющие обойти это, например, серверные события (SSE), но это не было полностью естественным.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    С помощью WebSocket, работающего через постоянную TCP-связь, сервер и клиент могут отправлять данные независимо друг от друга и, фактически, многим взаимодействующим сторонам! Это называется двунаправленной связью.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Еще одна интересная особенность связи WebSocket - это полнодуплексный режим . Хотя этот термин может показаться эзотерическим; это просто означает, что и сервер, и клиент могут отправлять данные одновременно . Сравните это с тем, что происходит в HTTP, где серверу приходится ждать, пока он получит запрос полностью, прежде чем он сможет ответить данными.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Хотя преимущества двунаправленной и полнодуплексной связи могут проявиться не сразу. мы увидим некоторые варианты использования, в которых они раскрывают реальную силу.
                </Paragraph>
                <Title>Performance</Title>
                <Paragraph style={{fontSize: 20}}>
                    Мы должны понимать, что WebSocket - это протокол с отслеживанием состояния, в котором связь происходит через выделенное TCP-соединение. С другой стороны, HTTP по своей сути является протоколом без сохранения состояния. Это влияет на то, как они будут работать с нагрузкой, но это действительно зависит от варианта использования.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Поскольку обмен данными через WebSocket происходит через повторно используемое TCP-соединение, накладные расходы на сообщение ниже по сравнению с HTTP . Следовательно, можно достичь более высокой пропускной способности на сервер. Но есть предел, до которого может масштабироваться один сервер, и именно здесь у WebSocket есть проблемы. Нелегко масштабировать приложения по горизонтали с помощью WebSockets.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Вот где сияет HTTP. С HTTP каждый новый запрос потенциально может попасть на любой сервер. Это означает, что для увеличения общей пропускной способности мы можем легко добавить больше серверов. Это потенциально не должно повлиять на приложение, работающее с HTTP.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Очевидно, что приложению может потребоваться привязка состояния и сеанса, что может упростить задачу, чем сделать.
                </Paragraph>
                <Title>Где их использовать</Title>
                <Paragraph style={{fontSize: 20}}>
                    Важно помнить, что, хотя WebSocket возник из-за недостатков HTTP, на самом деле это не замена HTTP. Так что у них обоих есть свое место и свое применение. Давайте быстро поймем, как мы можем принять решение.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Для основной части сценария , где время от времени связи требуется с сервером , как получать отчет работника, он по - прежнему разумно использовать службу REST через HTTP / S . Но для новых клиентских приложений, таких как приложение для определения цены акций, которое требует обновлений в реальном времени с сервера, гораздо удобнее использовать WebSocket.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    В общем, WebSocket больше подходит для случаев, когда связь на основе push и в реальном времени определяет требование более подходящим образом . Кроме того, WebSocket хорошо работает в сценариях, когда сообщение необходимо отправить нескольким клиентам одновременно . Это те случаи, когда обмен данными между клиентом и сервером через службы RESTful будет затруднен, если не запрещен.
                </Paragraph>
            </Typography>)
    }
}