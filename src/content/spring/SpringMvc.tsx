import React from 'react';
import 'antd/dist/antd.css';
import {Typography, Image} from 'antd';
import dispatcher from "./dispatcher.png";

const {Paragraph, Text, Title} = Typography;

export default class SpringMvc extends React.Component {
    render() {
        return (
            <Typography>
                <Paragraph style={{fontSize: 20}}>
                    Фреймворк <Text code>Spring MVC</Text> обеспечивает архитектуру паттерна Model — View — Controller (Модель — Отображение (далее — Вид) — Контроллер) при помощи слабо связанных готовых компонентов.
                    Паттерн <Text code>MVC</Text> разделяет аспекты приложения (логику ввода, бизнес-логику и логику UI), обеспечивая при этом свободную связь между ними.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li><Text code>Model</Text> (Модель) инкапсулирует (объединяет) данные приложения, в целом они будут состоять из <Text code>POJO</Text> («Старых добрых Java-объектов»)</li>
                        <li><Text code>View</Text> (Отображение, Вид) отвечает за отображение данных Модели, — как правило, генерируя <Text code>HTML</Text>, которые мы видим в своём браузере</li>
                        <li><Text code>Controller</Text> (Контроллер) обрабатывает запрос пользователя, создаёт соответствующую Модель и передаёт её для отображения в Вид</li>
                    </ul>
                </Paragraph>
                <Title>DispatcherServlet</Title>
                <Paragraph style={{fontSize: 20}}>
                    Вся логика работы <Text code>Spring MVC</Text> построена вокруг <Text code>DispatcherServlet</Text>, который принимает и обрабатывает все HTTP-запросы (из UI) и ответы на них.
                    Рабочий процесс обработки запроса DispatcherServlet'ом проиллюстрирован на следующей диаграмме
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Для запуска сервлета воспользуемся опять же контейнером сервлетов <Text code>Apache Tomcat</Text>. В каталоге <Text code>Tomcat</Text> в папке <Text code>webapps</Text>
                </Paragraph>
                <Image src={dispatcher} />
                <Paragraph style={{fontSize: 20}}>
                    Ниже приведена последовательность событий, соответствующая входящему HTTP-запросу:
                    <ul>
                        <li>После получения HTTP-запроса <Text code>DispatcherServlet</Text> обращается к интерфейсу <Text code>HandlerMapping</Text>, который определяет, какой Контроллер должен быть вызван, после чего, отправляет запрос в нужный Контроллер.</li>
                        <li>Контроллер принимает запрос и вызывает соответствующий служебный метод, основанный на <Text code>GET</Text> или <Text code>POST</Text>. Вызванный метод определяет данные Модели, основанные на определённой бизнес-логике и возвращает в DispatcherServlet имя Вида (View).</li>
                        <li>При помощи интерфейса <Text code>ViewResolver DispatcherServlet</Text> определяет, какой Вид нужно использовать на основании полученного имени.</li>
                        <li>После того, как Вид (View) создан, <Text code>DispatcherServlet</Text> отправляет данные Модели в виде атрибутов в Вид, который в конечном итоге отображается в браузере.</li>
                    </ul>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Все вышеупомянутые компоненты, а именно, <Text code>HandlerMapping</Text>, <Text code>Controller</Text> и <Text code>ViewResolver</Text>, являются частями интерфейса <Text code>WebApplicationContext extends ApplicationContext</Text>,
                    с некоторыми дополнительными особенностями, необходимыми для создания web-приложений.
                </Paragraph>
                <Title>@Controller vs @RestController</Title>
                <Paragraph style={{fontSize: 20}}>
                    Аннотация @ RestController была введена в Spring 4.0 для упрощения создания веб-сервисов RESTful. Это удобная аннотация, которая объединяет @ Controller и @ ResponseBody - устраняет необходимость аннотировать каждый метод обработки запросов класса контроллера аннотацией @ ResponseBody
                </Paragraph>
            </Typography>)
    }
}