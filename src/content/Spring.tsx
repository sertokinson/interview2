import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';
import SyntaxHighlighter from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";

const {Paragraph, Text, Title} = Typography;

export default class Spring extends React.Component {
    render() {
        return (
            <Typography>
                <Title>Dependency Injection (DI)</Title>
                <Paragraph style={{fontSize: 20}}>
                    Внедрение зависимостей — это специальный паттерн, который уменьшает связь между Spring компонентами. Таким образом, при применении DI, ваш код становится чище, проще, его становится легче понять и тестировать.
                    Согласно паттерну DI, создание объектов для зависимостей переходит на фабрику или отдается третьей стороне. Это означает, что мы можем сосредоточиться на использовании этих объектов вместо их создания.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    в приложении на основе <Text code>Spring</Text> объекты слабосвязаны за счет использования внедрения зависимостей.
                    Одной из целью создания <Text code>Spring</Text> было разорвать зависимость одних объектов от других.
                    Что такое зависимость? Это когда объект <Text code>Object1</Text> использует методы другого объекта <Text code>Object2</Text>,
                    т.е объект <Text code>Object1</Text> зависит от объекта <Text code>Object2</Text>, чьи методы он использует. А почему он зависит?
                    А потому, что пока объект <Text code>Object2</Text> не создан, <Text code>Object1</Text> не сможет реализовать свою функциональность.
                    Как разорвать зависимость? В объект <Text code>Object1</Text> «внедрить» ссылку на объект <Text code>Object2</Text>
                    через конструктор или сеттер. Этот процесс собственно и есть внедрение зависимости. При этом важно помнить, что в <Text code>Spring</Text>
                    объекты необходимо строить на основе интерфейсов, что бы зависимости внедряются в виде интерфейса для возможной последующей замены реализации.
                </Paragraph>
                <Title>Invocation of Control (IoC)</Title>
                <Paragraph style={{fontSize: 20}}>
                    вам не надо создавать объекты вручную с помощью оператора <Text code>new</Text>.
                    Эту функцию делегировали контейнеру <Text code>Spring</Text>.
                    Это и есть инверсия контроля (IoC) – передача функции инстанциирования необходимых зависимостей (объектов) контейнеру.
                    Какова роль разработчика во всем этом спросите вы? Объявить компонент, что бы он попал в контекст <Text code>Spring</Text>.
                    Контекст Spring-a по простому – мапа, где находятся все бины.
                    Когда говорят, что бин находиться в контексте спринга - считай, что бин лежит в мапе, а спринг знает <Text code>key</Text>,
                    чтоб его достать из мапы. Все, что отмечено как бин в <Text code>xml</Text> конфигурации или в классах анотациями <Text code>@Component</Text> - инстанциируется
                    и кладется в мапу вида <Text code>{"Map<key,bean> map"}</Text>, т.е. у контейнера есть мапа, где он «складирует» все бины
                    (ключевое понятие в <Text code>Spring</Text> – бин, это управляемая контейнером сущность. Для того, чтобы бин (обычный класс) стал управляемым, он должен попасть в контекст спринга)
                    и при необходимости внедрения, контейнер делает примерно следующее: <Text code>map.get(key)</Text>, в качестве <Text code>key</Text> выступает тип поля.
                </Paragraph>
                <Title>Autowired</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>Spring</Text> освобождает не только от необходимости создавать объекты, но и связывать их.
                    Например аннотация <Text code>@Autowired</Text> позволяет автоматически связывать компоненты.
                    Аннотацию спринга <Text code>@Autowired</Text> можно было бы описать по-простому так - дорогой друг, контейнер спринг, посмотри пожалуйста в своей мапе с бинами, нет ли у тебя там класса <Text code>instanceof or implements</Text> того, перед чем я стою.
                    Если есть - дай мне ссылку в поле, перед которым я объявлена. Автоматическое связывание позволяет уменьшить количество кода при определении зависимостей компонентов.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    После описания Бина в контексте он считывает <Text code>BeanDefinition</Text> который обрабатывает все <Text code>BeanFactoryPostProcessor</Text> (для того чтобы подменить Бин)
                    потом <Text code>BeanPostProcessor</Text> после этого он попадает в <Text code>ioc</Text> контейнер (HashMap) и доступен в <Text code>runtime</Text>.
                    Постпроцессор нужен для того чтобы сделать что-то с бином, пока он не инициализиоровался, нельзя использовать конструктор, нужно сделать метод <Text code>init()</Text>
                    2 фаза конструктора пометить его аннотацией <Text code>PostConstract</Text> и прописать в контекст <Text code>annotation-config</Text> для того чтоб подцепились все пост процессоры
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"PostProcessBeforeInit -> PostConstrct -> PostProcessAfterInit"}</Text>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    3 фаза конструктора нужна если при инициализации нужно вызвать метод с <Text code>PostProcessor</Text>
                    аннотацией для этого используется листенеры <Text code>AfterProxy Phase</Text>
                </Paragraph>
                <Title>Application Context</Title>
                <Paragraph style={{fontSize: 20}}>
                    В Spring Framework интерфейс org.springframework.factory.BeanFactory предоставляет фабрику для бинов, которая в то же время является IoC контейнером приложения. Управление бинами основано на конфигурации(java или xml).
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Интерфейс org.springframework.context.ApplicationContext — это обертка над bean factory, предоставляющая некоторые дополнительные возможности, например AOP, транзакции, безопасность, i18n, и т.п.
                </Paragraph>
                <Title>Scope</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>singleton</Text> - определяет один единственный бин для каждого контейнера Spring IoC (используется по умолчанию).
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>prototype</Text> - позволяет иметь любое количество экземпляров бина.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>request</Text> - создаётся один экземпляр бина на каждый <Text code>HTTP</Text> запрос.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>session</Text> - создаётся один экземпляр бина на каждую <Text code>HTTP</Text> сессию.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>global-session</Text> - создаётся один экземпляр бина на каждую глобальную <Text code>HTTP</Text> сессию.
                </Paragraph>
                <Title level={2}>Singleton</Title>
                <Paragraph style={{fontSize: 20}}>
                    Если мы устанавливаем свойству scope значение singleton, то в этом случае контейнер Spring IoC создаёт только один экземпляр объекта определённого в бине. Этот экземпляр помещается в кэш таких же бинов (синглтонов) и все последующие вызовы бина с таким именем будут возвращать объект из кэша.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Подход многократно обличался антипаттерном за то, что "глобальное состояние программы - это зло", не смотря на то, что глобальное состояние продолжает оставаться в программе не смотря на удаление всех синглтонов из проекта.
                    Я видел проекты с более чем 50 синглтонами и очень тяжелыми проблемами их связи между собой. В синглтоны без разбора и по незнанке вытаскивали буквально все. Это яркий пример антиподхода применения абсолютно любого паттерна.
                    Важно понимать что никакой элемент проектирования не является антипаттерном, он приводит к проблемам только при неумелом использовании.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text strong>Пример:</Text> - В одном месте вы создали подключение к базе и дальше можете уже использовать его в любой части программы, не пересоздавая подключение и не передавая каждый раз его как аргумент функции.
                </Paragraph>
                <Title level={2}>Prototype</Title>
                <Paragraph style={{fontSize: 20}}>
                    Проблема заключается в том, что если внедрить prototype bean в singleton то при обращении к нему мы все равно получим singleton
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text strong>Решение:</Text> создать бин во время выполнения
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"public class PrototypeBean {\n" +
                    "    private String name;\n" +
                    "\n" +
                    "    public PrototypeBean(String name) {\n" +
                    "        this.name = name;\n" +
                    "        logger.info(\"Prototype instance \" + name + \" created\");\n" +
                    "    }\n" +
                    "\n" +
                    "   //...\n" +
                    "}"}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"public class SingletonFunctionBean {\n" +
                    "\n" +
                    "    @Autowired\n" +
                    "    private Function<String, PrototypeBean> beanFactory;\n" +
                    "\n" +
                    "    public PrototypeBean getPrototypeInstance(String name) {\n" +
                    "        PrototypeBean bean = beanFactory.apply(name);\n" +
                    "        return bean;\n" +
                    "    }\n" +
                    "\n" +
                    "}"}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"@Configuration\n" +
                    "public class AppConfig {\n" +
                    "    @Bean\n" +
                    "    public Function<String, PrototypeBean> beanFactory() {\n" +
                    "        return name -> prototypeBeanWithParam(name);\n" +
                    "    }\n" +
                    "\n" +
                    "    @Bean\n" +
                    "    @Scope(value = \"prototype\")\n" +
                    "    public PrototypeBean prototypeBeanWithParam(String name) {\n" +
                    "       return new PrototypeBean(name);\n" +
                    "    }\n" +
                    "\n" +
                    "    @Bean\n" +
                    "    public SingletonFunctionBean singletonFunctionBean() {\n" +
                    "        return new SingletonFunctionBean();\n" +
                    "    }\n" +
                    "   //...\n" +
                    "}"}
                </SyntaxHighlighter>
                <Title>Bean</Title>
                <Paragraph style={{fontSize: 20}}>
                    Определение бина содержит метаданные конфигурации, которые необходимы управляющему контейнеру для получения следующей информации:
                    <ul>
                        <li>Как создать бин;</li>
                        <li>Информацию о жизненном цикле бина;</li>
                        <li>Зависимости бина;</li>
                    </ul>
                    В Spring Framework существуют такие свойства, определяющие бины:
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>class</Text> - этот атрибут является обязательным и указывает конкретный класс, который будет использоваться для создания бина.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>name</Text> - уникальный идентификатор бина. В случае конфигурации с помощью xml-файла, вы можете использовать свойство “id” и/или “name” для идентификации бина.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>scope</Text> - это свойство определяет область видимости создаваемых объектов.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>constructor-arg</Text> - определяет конструктор, использующийся для внедрения зависимости.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>properties</Text> - определяет свойства внедрения зависимости.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>initialization method</Text> - здесь определяется метод инициализации бина
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>destruction method</Text> - метод уничтожения бина, который будет использоваться при уничтожении контейнера, содержащего бин.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>autowiring mode</Text> - определяет режим автоматического связывания при внедрении зависимости.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>lazy-initialization mode</Text> - режим ленивой инициализации даёт контейнеру IoC команду создавать экземпляр бина при первом запросе, а не при запуске приложения.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Контейнер IoC не зависит от формата, в котором передаются метаданные. Существует 3 основных метода передачи метаданных контейнеру Spring IoC:
                    <ul>
                        <li>Конфигурационный XML-файл</li>
                        <li>Конфигурация на основе аннотаций</li>
                        <li>Конфигурация на основе Java</li>
                    </ul>
                </Paragraph>
                <Title>Жизненный цикл бинов</Title>
                <Paragraph style={{fontSize: 20}}>
                    Для управления созданием и уничтожением бина у нас есть параметры <Text code>init-method</Text> и <Text code>destroy-method</Text>.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li>Загрузка описаний бинов, создание графа зависимостей(между бинами)</li>
                        <li>Создание и запуск BeanFactoryPostProcessors</li>
                        <li>Создание бинов</li>
                        <li>Spring внедряет значения и зависимости в свойства бина</li>
                        <li>BeanPostProcessor это специальный интерфейс(о нем ниже), и Spring позволяет бинам имплементировать этот интерфейс. Реализуя метод postProcessBeforeInitialization(), можно изменить экземпляр бина перед его(бина) инициализацией(установка свойств и т.п.)</li>
                        <li>Если определены методы обратного вызова, то Spring вызывает их. Например, это метод, аннотированный @PostConstruct или метод initMethod из аннотации @Bean.</li>
                        <li>Теперь бин готов к использованию. Его можно получить с помощью метода ApplicationContext#getBean().</li>
                        <li>После того как контекст будет закрыт(метод close() из ApplicationContext), бин уничтожается.</li>
                        <li>Если в бине есть метод, аннотированный @PreDestroy, то перед уничтожением вызовется этот метод. Если бин имплементирует DisposibleBean, то Spring вызовет метод destroy(), чтобы очистить ресурсы или убить процессы в приложении. Если в аннотации @Bean определен метод destroyMethod, то вызовется и он.</li>
                    </ul>
                </Paragraph>
                <Title>Наследование бинов</Title>
                <Paragraph style={{fontSize: 20}}>
                    Наследованием (когда мы говорим о бинах) называется ситуация, когда “бин-потомок” перенимает (наследует) конфигурационные данные от своего “бина-родителя”.
                    Бин-наследник может переопределять (override) некоторые унаследованные свойства и добавлять свои собственные, если это потребуется.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    При этом важно учитывать тот факт, что наследование бинов в <Text code>Spring</Text> не имеет ничего общего с наследованием классов. Сам принцип наследование, тем не менее, остаётся тем же.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Другими словами, Вы можете определить некий шаблонный бин и, наследуюясь от него, добавлять необходимый функционал в “бины-потомки”.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Когда мы конфигурируем приложение с помощью XML файлов, мы используем свойство “parent”, указывая, при этом, “бин-родитель”.
                </Paragraph>
            </Typography>)
    }
}