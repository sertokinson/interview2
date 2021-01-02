import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';
import SyntaxHighlighter from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";

const {Paragraph, Text, Title} = Typography;

export default class Servlet extends React.Component {
    render() {
        return (
            <Typography>
                <Title>Что такое сервлет</Title>
                <Paragraph style={{fontSize: 20}}>
                    Сервлет является интерфейсом Java, реализация которого расширяет функциональные возможности сервера. Сервлет взаимодействует с клиентами посредством принципа запрос-ответ.
                    Хотя сервлеты могут обслуживать любые запросы, они обычно используются для расширения веб-серверов. Для таких приложений технология Java Servlet определяет HTTP-специфичные сервлет классы. Пакеты javax.servlet и javax.servlet.http обеспечивают интерфейсы и классы для создания сервлетов.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Класс сервлета наследуется от класса <Text code>HttpServlet</Text>.
                    Перед определением класса указана аннотация <Text code>WebServlet</Text>, которая указывает,
                    с какой конечной точкой будет сопоставляться данный сервлет. То есть данный сервлет будет обрабатывать запросы по адресу
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Для обработки GET-запросов (например, при обращении к сервлету из адресной строки браузера) сервлет должен переопределить метод <Text code>doGet</Text>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Этот метод принимает два параметра. Параметр типа <Text code>HttpServletRequest</Text> инкапсулирует всю информацию о запросе.
                    А параметр типа <Text code>HttpServletResponse</Text> позволяет управлять ответом. В частности, с помощью вызова <Text code>response.setContentType("text/html")</Text>
                    устанавливается тип ответа (в данном случае, мы говорим, что ответ представляет код html). А с помощью метода <Text code>getWriter()</Text> объекта <Text code>HttpServletResponse</Text>
                    мы можем получить объект <Text code>PrintWriter</Text>, через который можно отправить какой-то определенный ответ пользователю. По завершению использования объекта <Text code>HttpServletResponse</Text> его необходимо закрыть с помощью метода <Text code>close()</Text>.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Для запуска сервлета воспользуемся опять же контейнером сервлетов <Text code>Apache Tomcat</Text>. В каталоге <Text code>Tomcat</Text> в папке <Text code>webapps</Text>
                </Paragraph>
                <Title>Что такое контейнер сервлетов</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text strong>Контейнер сервлетов</Text>  — программа, представляющая собой сервер, который занимается системной поддержкой сервлетов и обеспечивает их жизненный цикл в соответствии с правилами, определёнными в спецификациях.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Известные реализации:Apache Tomcat, Jetty, JBoss, GlassFish, IBM WebSphere, Oracle Weblogic.
                </Paragraph>
                <Title>Что вы знаете о сервлет фильтрах</Title>
                <Paragraph style={{fontSize: 20}}>
                    Сервлетный фильтр, в соответствии со спецификацией, это Java-код, пригодный для повторного использования и позволяющий преобразовать содержание HTTP-запросов, HTTP-ответов и информацию, содержащуюся в заголовках HTTP. Сервлетный фильтр занимается предварительной обработкой запроса, прежде чем тот попадает в сервлет, и/или последующей обработкой ответа, исходящего из сервлета.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Основой для формирования фильтров служит интерфейс <Text code>javax.servlet.Filter</Text>, который реализует три метода:
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"void init (FilterConfig config) throws ServletException;\n" +
                    "void destroy();\n" +
                    "void doFilter (ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException;"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Метод <Text code>init()</Text> вызывается прежде, чем фильтр начинает работать,и настраивает конфигурационный объект фильтра.
                    Метод <Text code>doFilter</Text> выполняет непосредственно работу фильтра.
                    Таким образом, сервер вызывает <Text code>init()</Text> один раз, чтобы запустить фильтр в работу, а затем вызывает <Text code>doFilter()</Text> столько раз, сколько запросов будет сделано непосредственно к данному фильтру.
                    После того, как фильтр заканчивает свою работу, вызывается метод <Text code>destroy()</Text>.
                </Paragraph>
                <Title>Как реализовать запуск сервлета с запуском приложения</Title>
                <Paragraph style={{fontSize: 20}}>
                    Контейнер сервлетов обычно загружает сервлет при первом запросе клиента, но иногда необходимо загрузить сервлет прямо на старте приложения (например если сервлет объемный и будет долго грузиться). Для этого необходимо использовать элемент load-on-startup в дескрипторе (или аннотацию loadOnStartup), который укажет необходимость загрузки сервлета при запуске.
                </Paragraph>
                <SyntaxHighlighter language="xml" style={darcula}>
                    {"<servlet>\n" +
                    "    <servlet-name>foo</servlet-name>\n" +
                    "    <servlet-class>com.foo.servlets.Foo</servlet-class>\n" +
                    "    <load-on-startup>5</load-on-startup>\n" +
                    "</servlet>"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Значение должно быть int. Если значение отрицательное, то сервлет будет загружен при запросе клиента, а если 0 и далее, то загрузится на старте приложения. Чем меньше число, тем раньше в очереди на загрузку будет сервлет.
                </Paragraph>
                <Title>ServletContext и ServletConfig</Title>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li><Text code>ServletConfig</Text> является уникальным объектом для каждого сервлета, в то время как ServletContext уникальный для всего приложения.</li>
                        <li><Text code>ServletConfig</Text> используется для предоставления параметров инициализации сервлету, а ServletContext для предоставления параметров инициализации приложения для всех сервлетов.</li>
                        <li>У нас нет возможности устанавливать атрибуты в объекте ServletConfig, в то время как можно установить атрибуты в объекте ServletContext, которые будут доступны другим сервлетам.</li>
                    </ul>
                </Paragraph>
                <Title>Request Dispatcher</Title>
                <Paragraph style={{fontSize: 20}}>
                    Интерфейс RequestDispatcher используется для передачи запроса другому ресурсу (это может быть HTML, JSP или другой сервлет в том же приложении). Мы можем использовать это для добавления контента другого ресурса к ответу. Этот интерфейс используется для внутренней коммуникации между сервлетами в одном контексте. В интерфейсе реализовано два метода:
                    void forward(ServletRequest var1, ServletResponse var2) – передает запрос из сервлета к другому ресурсу (сервлету, JSP или HTML файлу) на сервере.
                    void include(ServletRequest var1, ServletResponse var2) – включает контент ресурса (сервлет, JSP или HTML страница) в ответ.
                    Доступ к интерфейсу можно получить с помощью метода ServletContext getRequestDispatcher(String s). Путь должен начинаться с / , который будет интерпретироваться относительным текущего корневого пути контекста.
                </Paragraph>
                <Title>Стоит ли волноваться о “многопоточной безопасности” работая с сервлетами?</Title>
                <Paragraph style={{fontSize: 20}}>
                    Методы класса HTTPServlet init() и destroy() вызываются один раз за жизненный цикл сервлета – поэтому по поводу них беспокоиться не стоит. Методы doGet(), doPost() вызываются на каждый запрос клиента и т.к. сервлеты используют многопоточность, то здесь нужно задумываться о потокобезопасной работе.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    В случае наличия локальных переменных в этих методах нет необходимости думать о многопоточной безопасности, т.к. они будут созданы отдельно для каждой нити. Но если используются глобальные ресурсы, то необходимо использовать синхронизацию как и в любом многопоточном приложении Java.
                </Paragraph>
                <Title>Индепотентный метод</Title>
                <Paragraph style={{fontSize: 20}}>
                    HTTP метод называется неизменяемым, если он всегда возвращает одинаковый результат. HTTP методы GET, PUT, DELETE, HEAD, OPTIONS являются неизменяемыми. Необходимо реализовывать приложение так, чтобы эти методы возвращали одинаковый результат. К изменяемым методам относится HTTP метод POST. Post метод используется для реализации чего-либо, что изменяется при каждом запросе.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    К примеру, для доступа к HTML странице или изображению необходимо использовать метод GET, т.к. он возвращает одинаковый результат. Но если нам необходимо сохранить информацию о заказе в базе данных, то нужно использовать POST метод. Неизменяемые методы так же известны как безопасные методы и нет необходимости заботиться о повторяющихся запросах от клиента для этих методов.
                </Paragraph>
            </Typography>)
    }
}