import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';
import SyntaxHighlighter from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";

const {Paragraph, Text, Title} = Typography;

export default class Pattern extends React.Component {
    render() {
        return (
            <Typography>
                <Paragraph style={{fontSize: 20}}>
                    Типы паттернов:
                    <ul>
                        <li>порождающие</li>
                        <li>структурные</li>
                        <li>поведенческие</li>
                    </ul>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Порождающие паттерны предоставляют механизмы инициализации, позволяя создавать объекты удобным способом.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Структурные паттерны определяют отношения между классами и объектами, позволяя им работать совместно.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Поведенческие паттерны используются для того, чтобы упростить взаимодействие между сущностями.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Порождающие:
                    <ul>
                        <li><Text code>Singleton</Text>(Одиночка) - ограничивает создание одного экземпляра класса, обеспечивает доступ к его единственному объекту.</li>
                        <li><Text code>Factory</Text>(Фабрика) - используется, когда у нас есть суперкласс с несколькими подклассами и на основе ввода, нам нужно вернуть один из подкласса.</li>
                        <li><Text code>Abstract Factory</Text>(Абстрактная фабрика) - используем супер фабрику для создания фабрики, затем используем созданную фабрику для создания объектов.</li>
                        <li><Text code>Builder</Text>(Строитель) - используется для создания сложного объекта с использованием простых объектов. Постепенно он создает больший объект от малого и простого объекта.</li>
                        <li><Text code>Prototype</Text>(Прототип) - помогает создать дублированный объект с лучшей производительностью, вместо нового создается возвращаемый клон существующего объекта.</li>
                    </ul>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Структурные:
                    <ul>
                        <li><Text code>Adapter</Text>(Адаптер) - это конвертер между двумя несовместимыми объектами. Используя паттерн адаптера, мы можем объединить два несовместимых интерфейса.</li>
                        <li><Text code>Composite</Text>(Компоновщик) - использует один класс для представления древовидной структуры.</li>
                        <li><Text code>Proxy</Text>(Заместитель) - представляет функциональность другого класса.</li>
                        <li><Text code>Facade</Text>(Фасад) - обеспечивает простой интерфейс для клиента, и клиент использует интерфейс для взаимодействия с системой.</li>
                        <li><Text code>Bridge</Text>(Мост) - делает конкретные классы независимыми от классов реализации интерфейса.</li>
                        <li><Text code>Decorator</Text>(Декоратор) - добавляет новые функциональные возможности существующего объекта без привязки его структуры.</li>
                    </ul>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Поведенческие:
                    <ul>
                        <li><Text code>Template Method</Text>(Шаблонный метод) - определяющий основу алгоритма и позволяющий наследникам переопределять некоторые шаги алгоритма, не изменяя его структуру в целом.</li>
                        <li><Text code>Mediator</Text>(Посредник) - предоставляет класс посредника, который обрабатывает все коммуникации между различными классами.</li>
                        <li><Text code>Observer</Text>(Наблюдатель) - позволяет одним обьектам следить и реагировать на события, происходящие в других объектах.</li>
                        <li><Text code>State</Text>(Состояние) - объект может изменять свое поведение в зависимости от его состояния.</li>
                        <li><Text code>Iterator</Text>(Итератор) - последовательно осуществляет доступ к элементам объекта коллекции, не зная его основного представления.</li>
                        <li>Цепочка обязанностей - позволяет передавать запросы последовательно по цепочке обработчиков. Каждый последующий обработчик решает, может ли он обработать запрос сам и стоит ли передавать запрос дальше по цепи.</li>
                    </ul>
                </Paragraph>
                <Title>Порождающие</Title>
                <Title level={2}>Singleton (Одиночка)</Title>
                <Paragraph style={{fontSize: 20}}>
                    Ограничивает создание одного экземпляра класса, обеспечивает доступ к его единственному объекту.
                    Конструктор класса приватный. Метод <Text code>getInstance()</Text> создает только один экземпляр класса.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"class Singleton {\n" +
                    "    private static Singleton instance = null;\n" +
                    "    private Singleton() {}\n" +
                    "    public static Singleton getInstance() {\n" +
                    "        if (instance == null) {\n" +
                    "            instance = new Singleton();\n" +
                    "\t\t}\n" +
                    "        return instance;\n" +
                    "    }\n" +
                    "    public void setUp() {\n" +
                    "        System.out.println(\"setUp\");\n" +
                    "    }\n" +
                    "}\n" +
                    "\n" +
                    "public class SingletonTest {//тест\n" +
                    "    public static void main(String[] args){\n" +
                    "        Singleton singelton = Singleton.getInstance();\n" +
                    "        singelton.setUp();\n" +
                    "    }\n" +
                    "}"}
                </SyntaxHighlighter>
                <Title level={2}>Factory (Фабрика)</Title>
                <Paragraph style={{fontSize: 20}}>
                    Используется, когда у нас есть суперкласс с несколькими подклассами и на основе ввода, нам нужно вернуть один из подкласса. Класс не знает какого типа объект он должен создать. Объекты создаются в зависимости от входящих данных.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"class Factory {\n" +
                    "    public OS getCurrentOS(String inputos) {\n" +
                    "        OS os = null;\n" +
                    "        if (inputos.equals(\"windows\")) {\n" +
                    "            os = new windowsOS();\n" +
                    "        } else if (inputos.equals(\"linux\")) {\n" +
                    "            os = new linuxOS();\n" +
                    "        } else if (inputos.equals(\"mac\")) {\n" +
                    "            os = new macOS();\n" +
                    "        }\n" +
                    "        return os;\n" +
                    "    }\n" +
                    "}\n" +
                    "interface OS {\n" +
                    "    void getOS();\n" +
                    "}\n" +
                    "class windowsOS implements OS {\n" +
                    "    public void getOS () {\n" +
                    "        System.out.println(\"применить для виндовс\");\n" +
                    "    }\n" +
                    "}\n" +
                    "class linuxOS implements OS {\n" +
                    "    public void getOS () {\n" +
                    "        System.out.println(\"применить для линукс\");\n" +
                    "    }\n" +
                    "}\n" +
                    "class macOS implements OS {\n" +
                    "    public void getOS () {\n" +
                    "        System.out.println(\"применить для мак\");\n" +
                    "    }\n" +
                    "}\n" +
                    "\n" +
                    "public class FactoryTest {//тест\n" +
                    "    public static void main(String[] args){\n" +
                    "        String win = \"linux\";\n" +
                    "        Factory factory = new Factory();\n" +
                    "        OS os = factory.getCurrentOS(win);\n" +
                    "        os.getOS();\n" +
                    "    }\n" +
                    "}"}
                </SyntaxHighlighter>
                <Title level={2}>Abstract Factory (Абстрактная фабрика)</Title>
                <Paragraph style={{fontSize: 20}}>
                    Позволяет выбрать конкретную реализацию фабрики из семейства возможных фабрик. Создает семейство связанных объектов. Легко расширять.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"interface Lada {\n" +
                    "    long getLadaPrice();\n" +
                    "}\n" +
                    "interface Ferrari {\n" +
                    "    long getFerrariPrice();\n" +
                    "}\n" +
                    "interface Porshe {\n" +
                    "    long getPorshePrice();\n" +
                    "}\n" +
                    "interface InteAbsFactory {\n" +
                    "    Lada getLada();\n" +
                    "    Ferrari getFerrari();\n" +
                    "    Porshe getPorshe();\n" +
                    "}\n" +
                    "class UaLadaImpl implements Lada {// первая\n" +
                    "    public long getLadaPrice() {\n" +
                    "        return 1000;\n" +
                    "    }\n" +
                    "}\n" +
                    "class UaFerrariImpl implements Ferrari {\n" +
                    "    public long getFerrariPrice() {\n" +
                    "        return 3000;\n" +
                    "    }\n" +
                    "}\n" +
                    "class UaPorsheImpl implements Porshe {\n" +
                    "    public long getPorshePrice() {\n" +
                    "        return 2000;\n" +
                    "    }\n" +
                    "}\n" +
                    "class UaCarPriceAbsFactory implements InteAbsFactory {\n" +
                    "    public Lada getLada() {\n" +
                    "        return new UaLadaImpl();\n" +
                    "    }\n" +
                    "    public Ferrari getFerrari() {\n" +
                    "        return new UaFerrariImpl();\n" +
                    "    }\n" +
                    "    public Porshe getPorshe() {\n" +
                    "        return new UaPorsheImpl();\n" +
                    "    }\n" +
                    "}// первая\n" +
                    "class RuLadaImpl implements Lada {// вторая\n" +
                    "    public long getLadaPrice() {\n" +
                    "        return 10000;\n" +
                    "    }\n" +
                    "}\n" +
                    "class RuFerrariImpl implements Ferrari {\n" +
                    "    public long getFerrariPrice() {\n" +
                    "        return 30000;\n" +
                    "    }\n" +
                    "}\n" +
                    "class RuPorsheImpl implements Porshe {\n" +
                    "    public long getPorshePrice() {\n" +
                    "        return 20000;\n" +
                    "    }\n" +
                    "}\n" +
                    "class RuCarPriceAbsFactory implements InteAbsFactory {\n" +
                    "    public Lada getLada() {\n" +
                    "        return new RuLadaImpl();\n" +
                    "    }\n" +
                    "    public Ferrari getFerrari() {\n" +
                    "        return new RuFerrariImpl();\n" +
                    "    }\n" +
                    "    public Porshe getPorshe() {\n" +
                    "        return new RuPorsheImpl();\n" +
                    "    }\n" +
                    "}// вторая\n" +
                    "\n" +
                    "public class AbstractFactoryTest {//тест\n" +
                    "    public static void main(String[] args) {\n" +
                    "        String country = \"UA\";\n" +
                    "        InteAbsFactory ifactory = null;\n" +
                    "        if(country.equals(\"UA\")) {\n" +
                    "            ifactory = new UaCarPriceAbsFactory();\n" +
                    "        } else if(country.equals(\"RU\")) {\n" +
                    "            ifactory = new RuCarPriceAbsFactory();\n" +
                    "        }\n" +
                    "\n" +
                    "        Lada lada = ifactory.getLada();\n" +
                    "        System.out.println(lada.getLadaPrice());\n" +
                    "    }\n" +
                    "}"}
                </SyntaxHighlighter>
                <Title level={2}>Builder (Строитель)</Title>
                <Paragraph style={{fontSize: 20}}>
                    Используется для создания сложного объекта.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"public class Account {\n" +
                    "\n" +
                    "    private String userId;\n" +
                    "    private String token;\n" +
                    "\n" +
                    "    private Account() {\n" +
                    "        // private constructor\n" +
                    "    }\n" +
                    "\n" +
                    "    public String getUserId() {\n" +
                    "        return userId;\n" +
                    "    }\n" +
                    "\n" +
                    "    public String getToken() {\n" +
                    "        return token;\n" +
                    "    }\n" +
                    "\n" +
                    "    public static Builder newBuilder() {\n" +
                    "        return new Account().new Builder();\n" +
                    "    }\n" +
                    "\n" +
                    "    public class Builder {\n" +
                    "\n" +
                    "        private Builder() {\n" +
                    "            // private constructor\n" +
                    "        }\n" +
                    "\n" +
                    "        public Builder setUserId(String userId) {\n" +
                    "            Account.this.userId = userId;\n" +
                    "\n" +
                    "            return this;\n" +
                    "        }\n" +
                    "\n" +
                    "        public Builder setToken(String token) {\n" +
                    "            Account.this.token = token;\n" +
                    "\n" +
                    "            return this;\n" +
                    "        }\n" +
                    "\n" +
                    "        public Account build() {\n" +
                    "            return Account.this;\n" +
                    "        }\n" +
                    "\n" +
                    "    }\n" +
                    "}"}
                </SyntaxHighlighter>
                <Title level={2}>Prototype (Прототип)</Title>
                <Paragraph style={{fontSize: 20}}>
                    Помогает создать дублированный объект с лучшей производительностью, вместо нового создается возвращаемый клон существующего объекта. Клонирует существующий объект.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"interface Copyable {\n" +
                    "    Copyable copy();\n" +
                    "}\n" +
                    "class ComplicatedObject implements Copyable {\n" +
                    "    private Type type;\n" +
                    "    public enum Type {\n" +
                    "        ONE, TWO\n" +
                    "    }\n" +
                    "    public ComplicatedObject copy() {\n" +
                    "        ComplicatedObject complicatedobject = new ComplicatedObject();\n" +
                    "        return complicatedobject;\n" +
                    "    }\n" +
                    "    public void setType(Type type) {\n" +
                    "        this.type = type;\n" +
                    "    }\n" +
                    "}\n" +
                    "\n" +
                    "public class PrototypeTest {//тест\n" +
                    "    public static void main(String[] args) {\n" +
                    "        ComplicatedObject prototype = new ComplicatedObject();\n" +
                    "        ComplicatedObject clone = prototype.copy();\n" +
                    "        clone.setType(ComplicatedObject.Type.ONE);\n" +
                    "    }\n" +
                    "}"}
                </SyntaxHighlighter>
                <Title>Структурные</Title>
                <Title level={2}>Adapter (Адаптер)</Title>
                <Paragraph style={{fontSize: 20}}>
                    Используя паттерн, мы можем объединить два несовместимых объекта. Конвертер между двумя несовместимыми объектами.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"class PBank {\n" +
                    "\tprivate int balance;\n" +
                    "\tpublic PBank() { balance = 100; }\n" +
                    "\tpublic void getBalance() {\n" +
                    "\t\tSystem.out.println(\"PBank balance = \" + balance);\n" +
                    "\t}\n" +
                    "}\n" +
                    "class ABank {\n" +
                    "\tprivate int balance;\n" +
                    "\tpublic ABank() { balance = 200; }\n" +
                    "\tpublic void getBalance() {\n" +
                    "\t\tSystem.out.println(\"ABank balance = \" + balance);\n" +
                    "\t}\n" +
                    "}\n" +
                    "class PBankAdapter extends PBank {\n" +
                    "\tprivate ABank abank;\n" +
                    "\tpublic PBankAdapter(ABank abank) {\n" +
                    "\t\tthis.abank = abank;\n" +
                    "\t}\n" +
                    "\tpublic void getBalance() {\n" +
                    "\t\tabank.getBalance();\n" +
                    "\t}\n" +
                    "}\n" +
                    "\n" +
                    "public class AdapterTest {//тест\n" +
                    "\tpublic static void main(String[] args) {\n" +
                    "\t\tPBank pbank = new PBank();\n" +
                    "\t\tpbank.getBalance();\n" +
                    "\t\tPBankAdapter abank = new PBankAdapter(new ABank());\n" +
                    "\t\tabank.getBalance();\n" +
                    "\t}\n" +
                    "}"}
                </SyntaxHighlighter>
                <Title level={2}>Composite (Компоновщик)</Title>
                <Paragraph style={{fontSize: 20}}>
                    Группирует несколько объектов в древовидную структуру используя один класс. Позволяет работать с несколькими классами через один объект.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"import java.util.ArrayList;\n" +
                    "import java.util.List;\n" +
                    "interface Car {\n" +
                    "    void draw(String color);\n" +
                    "}\n" +
                    "class SportCar implements Car {\n" +
                    "    public void draw(String color) {\n" +
                    "        System.out.println(\"SportCar color: \" + color);\n" +
                    "    }\n" +
                    "}\n" +
                    "class UnknownCar implements Car {\n" +
                    "    public void draw(String color) {\n" +
                    "        System.out.println(\"UnknownCar color: \" + color);\n" +
                    "    }\n" +
                    "}\n" +
                    "class Drawing implements Car {\n" +
                    "    private List<Car> cars = new ArrayList<Car>();\n" +
                    "    public void draw(String color) {\n" +
                    "        for(Car car : cars) {\n" +
                    "            car.draw(color);\n" +
                    "        }\n" +
                    "    }\n" +
                    "    public void add(Car s){\n" +
                    "        this.cars.add(s);\n" +
                    "    }\n" +
                    "    public void clear(){\n" +
                    "\t\tSystem.out.println();\n" +
                    "        this.cars.clear();\n" +
                    "    }\n" +
                    "}\n" +
                    "\n" +
                    "public class CompositeTest {//тест\n" +
                    "    public static void main(String[] args) {\n" +
                    "        Car sportCar = new SportCar();\n" +
                    "        Car unknownCar = new UnknownCar();\n" +
                    "        Drawing drawing = new Drawing();\n" +
                    "        drawing.add(sportCar);\n" +
                    "        drawing.add(unknownCar);\n" +
                    "        drawing.draw(\"green\");\n" +
                    "        drawing.clear();\n" +
                    "        drawing.add(sportCar);\n" +
                    "        drawing.add(unknownCar);\n" +
                    "        drawing.draw(\"white\");\n" +
                    "    }}"}
                </SyntaxHighlighter>
                <Title level={2}>Proxy (Заместитель)</Title>
                <Paragraph style={{fontSize: 20}}>
                    Представляет объекты, которые могут контролировать другие объекты перехватывая их вызовы. Можно перехватить вызов оригинального объекта.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"interface Image {\n" +
                    "    void display();\n" +
                    "}\n" +
                    "class RealImage implements Image {\n" +
                    "    private String file;\n" +
                    "    public RealImage(String file){\n" +
                    "        this.file = file;\n" +
                    "        load(file);\n" +
                    "    }\n" +
                    "    private void load(String file){\n" +
                    "        System.out.println(\"Загрузка \" + file);\n" +
                    "    }\n" +
                    "    public void display() {\n" +
                    "        System.out.println(\"Просмотр \" + file);\n" +
                    "    }\n" +
                    "}\n" +
                    "class ProxyImage implements Image {\n" +
                    "    private String file;\n" +
                    "    private RealImage image;\n" +
                    "    public ProxyImage(String file){\n" +
                    "        this.file = file;\n" +
                    "    }\n" +
                    "    public void display() {\n" +
                    "        if(image == null){\n" +
                    "            image = new RealImage(file);\n" +
                    "        }\n" +
                    "        image.display();\n" +
                    "    }\n" +
                    "}\n" +
                    "\n" +
                    "public class ProxyTest {//тест\n" +
                    "    public static void main(String[] args) {\n" +
                    "        Image image = new ProxyImage(\"test.jpg\");\n" +
                    "        image.display();\n" +
                    "        image.display();\n" +
                    "    }\n" +
                    "}"}
                </SyntaxHighlighter>
                <Title level={2}>Facade (Фасад)</Title>
                <Paragraph style={{fontSize: 20}}>
                    Скрывает сложную систему классов приводя все вызовы к одному объекту. Помещает вызов нескольких сложных объектов в один объект.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"interface Car {\n" +
                    "    void start();\n" +
                    "    void stop();\n" +
                    "}\n" +
                    "class Key implements Car {\n" +
                    "    public void start() {\n" +
                    "        System.out.println(\"Вставить ключи\");\n" +
                    "    }\n" +
                    "    public void stop() {\n" +
                    "        System.out.println(\"Вытянуть ключи\");\n" +
                    "    }\n" +
                    "}\n" +
                    "class Engine implements Car {\n" +
                    "    public void start() {\n" +
                    "        System.out.println(\"Запустить двигатель\");\n" +
                    "    }\n" +
                    "    public void stop() {\n" +
                    "        System.out.println(\"Остановить двигатель\");\n" +
                    "    }\n" +
                    "}\n" +
                    "class Facade {\n" +
                    "    private Key key;\n" +
                    "    private Engine engine;\n" +
                    "    public Facade() {\n" +
                    "        key = new Key();\n" +
                    "        engine = new Engine();\n" +
                    "    }\n" +
                    "    public void startCar() {\n" +
                    "        key.start();\n" +
                    "        engine.start();\n" +
                    "    }\n" +
                    "    public void stoptCar() {\n" +
                    "        key.stop();\n" +
                    "        engine.stop();\n" +
                    "    }\n" +
                    "}\n" +
                    "\n" +
                    "public class FacadeTest {//тест\n" +
                    "    public static void main(String[] args) {\n" +
                    "        Facade facade = new Facade();\n" +
                    "        facade.startCar();\n" +
                    "        System.out.println();\n" +
                    "        facade.stoptCar();}\n" +
                    "}"}
                </SyntaxHighlighter>
                <Title level={2}>Bridge (Мост)</Title>
                <Paragraph style={{fontSize: 20}}>
                    {"Разделяет реализацию и абстракцию, дает возможность изменять их свободно друг от друга. Делает конкретные классы независимыми от классов реализации интерфейса."}
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"interface Engine {\n" +
                    "    void setEngine();\n" +
                    "}\n" +
                    "abstract class Car {\n" +
                    "    protected Engine engine;\n" +
                    "    public Car(Engine engine){\n" +
                    "        this.engine = engine;\n" +
                    "    }\n" +
                    "    abstract public void setEngine();\n" +
                    "}\n" +
                    "class SportCar extends Car {\n" +
                    "    public SportCar(Engine engine) {\n" +
                    "        super(engine);\n" +
                    "    }\n" +
                    "    public void setEngine() {\n" +
                    "        System.out.print(\"SportCar engine: \");\n" +
                    "        engine.setEngine();\n" +
                    "    }\n" +
                    "}\n" +
                    "class UnknownCar extends Car {\n" +
                    "    public UnknownCar(Engine engine) {\n" +
                    "        super(engine);\n" +
                    "    }\n" +
                    "    public void setEngine() {\n" +
                    "        System.out.print(\"UnknownCar engine: \");\n" +
                    "        engine.setEngine();\n" +
                    "    }\n" +
                    "}\n" +
                    "class SportEngine implements Engine {\n" +
                    "    public void setEngine(){\n" +
                    "        System.out.println(\"sport\");\n" +
                    "    }\n" +
                    "}\n" +
                    "class UnknownEngine implements Engine {\n" +
                    "    public void setEngine(){\n" +
                    "        System.out.println(\"unknown\");\n" +
                    "    }\n" +
                    "}\n" +
                    "public class BridgeTest {//тест\n" +
                    "    public static void main(String[] args) {\n" +
                    "        Car sportCar = new SportCar(new SportEngine());\n" +
                    "        sportCar.setEngine();\n" +
                    "        System.out.println();\n" +
                    "        Car unknownCar = new UnknownCar(new UnknownEngine());\n" +
                    "        unknownCar.setEngine();\n" +
                    "    }\n" +
                    "}"}
                </SyntaxHighlighter>
                <Title level={2}>Decorator (Декоратор)</Title>
                <Paragraph style={{fontSize: 20}}>
                    Добавляет новые функциональные возможности существующего объекта без привязки его структуры.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"interface Car {\n" +
                    "    void draw();\n" +
                    "}\n" +
                    "class SportCar implements Car {\n" +
                    "    public void draw() {\n" +
                    "        System.out.println(\"SportCar\");\n" +
                    "    }\n" +
                    "}\n" +
                    "class UnknownCar implements Car {\n" +
                    "    public void draw() {\n" +
                    "        System.out.println(\"UnknownCar\");\n" +
                    "    }\n" +
                    "}\n" +
                    "abstract class CarDecorator implements Car {\n" +
                    "    protected Car decorated;\n" +
                    "    public CarDecorator(Car decorated){\n" +
                    "        this.decorated = decorated;\n" +
                    "    }\n" +
                    "    public void draw(){\n" +
                    "        decorated.draw();\n" +
                    "    }\n" +
                    "}\n" +
                    "\n" +
                    "\n" +
                    "class BlueCarDecorator extends CarDecorator {\n" +
                    "    public BlueCarDecorator(Car decorated) {\n" +
                    "        super(decorated);\n" +
                    "    }\n" +
                    "    public void draw() {\n" +
                    "        decorated.draw();\n" +
                    "        setColor();\n" +
                    "    }\n" +
                    "    private void setColor(){\n" +
                    "        System.out.println(\"Color: red\");\n" +
                    "    }\n" +
                    "}\n" +
                    "\n" +
                    "public class DecoratorTest {//тест\n" +
                    "    public static void main(String[] args) {\n" +
                    "        Car sportCar = new SportCar();\n" +
                    "        Car blueUnknownCar = new BlueCarDecorator(new UnknownCar());\n" +
                    "        sportCar.draw();\n" +
                    "        System.out.println();\n" +
                    "        blueUnknownCar.draw();\n" +
                    "    }\n" +
                    "}"}
                </SyntaxHighlighter>
                <Title>Поведенческие</Title>
                <Title level={2}>Template Method (Шаблонный метод)</Title>
                <Paragraph style={{fontSize: 20}}>
                    Позволяет определить основу алгоритма и позволяющий подклассам переопределять определенные шаги алгоритма, не изменяя его структуру в целом.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"abstract class Car {\n" +
                    "    abstract void startEngine();\n" +
                    "    abstract void stopEngine();\n" +
                    "\n" +
                    "    public final void start(){\n" +
                    "        startEngine();\n" +
                    "        stopEngine();\n" +
                    "    }\n" +
                    "}\n" +
                    "class OneCar extends Car {\n" +
                    "    public void startEngine() {\n" +
                    "        System.out.println(\"Start engine.\");\n" +
                    "    }\n" +
                    "    public void stopEngine() {\n" +
                    "        System.out.println(\"Stop engine.\");\n" +
                    "    }\n" +
                    "}\n" +
                    "class TwoCar extends Car {\n" +
                    "    public void startEngine() {\n" +
                    "        System.out.println(\"Start engine.\");\n" +
                    "    }\n" +
                    "    public void stopEngine() {\n" +
                    "        System.out.println(\"Stop engine.\");\n" +
                    "    }\n" +
                    "}\n" +
                    "\n" +
                    "public class TemplateTest {//тест\n" +
                    "    public static void main(String[] args) {\n" +
                    "        Car car1 = new OneCar();\n" +
                    "        car1.start();\n" +
                    "        System.out.println();\n" +
                    "        Car car2 = new TwoCar();\n" +
                    "        car2.start();\n" +
                    "    }\n" +
                    "}"}
                </SyntaxHighlighter>
                <Title level={2}>Observer (Наблюдатель)</Title>
                <Paragraph style={{fontSize: 20}}>
                    Позволяет одним объектам наблюдать за действиями что происходят в других объектах.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"import java.util.ArrayList;\n" +
                    "import java.util.List;\n" +
                    "interface Observer {\n" +
                    "    void event(List<String> strings);\n" +
                    "}\n" +
                    "class University {\n" +
                    "    private List<Observer> observers = new ArrayList<Observer>();\n" +
                    "    private List<String> students = new ArrayList<String>();\n" +
                    "    public void addStudent(String name) {\n" +
                    "        students.add(name);\n" +
                    "        notifyObservers();\n" +
                    "    }\n" +
                    "    public void removeStudent(String name) {\n" +
                    "        students.remove(name);\n" +
                    "        notifyObservers();\n" +
                    "    }\n" +
                    "    public void addObserver(Observer observer){\n" +
                    "        observers.add(observer);\n" +
                    "    }\n" +
                    "    public void removeObserver(Observer observer) {\n" +
                    "        observers.remove(observer);\n" +
                    "    }\n" +
                    "    public void notifyObservers(){\n" +
                    "        for (Observer observer : observers) {\n" +
                    "            observer.event(students);\n" +
                    "        }\n" +
                    "    }\n" +
                    "}\n" +
                    "class Director implements Observer {\n" +
                    "    public void event(List<String> strings) {\n" +
                    "        System.out.println(\"The list of students has changed: \" + strings);\n" +
                    "    }\n" +
                    "}\n" +
                    "\n" +
                    "public class ObserverTest {//тест\n" +
                    "    public static void main(String[] args) {\n" +
                    "        University university = new University();\n" +
                    "        Director director = new Director();\n" +
                    "        university.addStudent(\"Vaska\");\n" +
                    "        university.addObserver(director);\n" +
                    "        university.addStudent(\"Anna\");\n" +
                    "        university.removeStudent(\"Vaska\");\n" +
                    "    }\n" +
                    "}"}
                </SyntaxHighlighter>
                <Title level={2}>Iterator (Итератор)</Title>
                <Paragraph style={{fontSize: 20}}>
                    Последовательно осуществляет доступ к элементам объекта коллекции, не зная его основного представления.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"interface Iterator {\n" +
                    "    boolean hasNext();\n" +
                    "    ObjectJava next();\n" +
                    "}\n" +
                    "class Numbers {\n" +
                    "    public int num[] = {1 , 2, 3};\n" +
                    "    public Iterator getIterator() {\n" +
                    "        return new NumbersIterator();\n" +
                    "    }\n" +
                    "    private class NumbersIterator implements Iterator {\n" +
                    "        int ind;\n" +
                    "        public boolean hasNext() {\n" +
                    "            if(ind < num.length) return true;\n" +
                    "            return false;\n" +
                    "        }\n" +
                    "        public ObjectJava next() {\n" +
                    "            if(this.hasNext()) return num[ind++];\n" +
                    "            return null;\n" +
                    "        }\n" +
                    "    }\n" +
                    "}\n" +
                    "\n" +
                    "public class IteratorTest {//тест\n" +
                    "    public static void main(String[] args) {\n" +
                    "        Numbers numbers = new Numbers();\n" +
                    "        Iterator iterator = numbers.getIterator();\n" +
                    "        while (iterator.hasNext()) {\n" +
                    "            System.out.println(iterator.next());\n" +
                    "        }\n" +
                    "    }\n" +
                    "}"}
                </SyntaxHighlighter>
                <Title level={2}>Цепочка обязанностей</Title>
                <Title level={3}>Проблема</Title>
                <Paragraph style={{fontSize: 20}}>
                    Представьте, что вы делаете систему приёма онлайн-заказов. Вы хотите ограничить к ней доступ так, чтобы только авторизованные пользователи могли создавать заказы. Кроме того, определённые пользователи, владеющие правами администратора, должны иметь полный доступ к заказам.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Вы быстро сообразили, что эти проверки нужно выполнять последовательно. Ведь пользователя можно попытаться «залогинить» в систему, если его запрос содержит логин и пароль. Но если такая попытка не удалась, то проверять расширенные права доступа попросту не имеет смысла.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    На протяжении следующих нескольких месяцев вам пришлось добавить ещё несколько таких последовательных проверок.
                    <ul>
                        <li>Кто-то резонно заметил, что неплохо бы проверять данные, передаваемые в запросе перед тем, как вносить их в систему — вдруг запрос содержит данные о покупке несуществующих продуктов.</li>
                        <li>Кто-то предложил блокировать массовые отправки формы с одним и тем же логином, чтобы предотвратить подбор паролей ботами.</li>
                        <li>Кто-то заметил, что форму заказа неплохо бы доставать из кеша, если она уже была однажды показана.</li>
                    </ul>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    С каждой новой «фичей» код проверок, выглядящий как большой клубок условных операторов, всё больше и больше раздувался. При изменении одного правила приходилось трогать код всех проверок. А для того, чтобы применить проверки к другим ресурсам, пришлось продублировать их код в других классах.
                </Paragraph>
                <Title level={3}>Решение</Title>
                <Paragraph style={{fontSize: 20}}>
                    Как и многие другие поведенческие паттерны, Цепочка обязанностей базируется на том, чтобы превратить отдельные поведения в объекты. В нашем случае каждая проверка переедет в отдельный класс с единственным методом выполнения. Данные запроса, над которым происходит проверка, будут передаваться в метод как аргументы.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    А теперь по-настоящему важный этап. Паттерн предлагает связать объекты обработчиков в одну цепь. Каждый из них будет иметь ссылку на следующий обработчик в цепи. Таким образом, при получении запроса обработчик сможет не только сам что-то с ним сделать, но и передать обработку следующему объекту в цепочке.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Передавая запросы в первый обработчик цепочки, вы можете быть уверены, что все объекты в цепи смогут его обработать. При этом длина цепочки не имеет никакого значения.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    И последний штрих. Обработчик не обязательно должен передавать запрос дальше, причём эта особенность может быть использована по-разному.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    В примере с фильтрацией доступа обработчики прерывают дальнейшие проверки, если текущая проверка не прошла. Ведь нет смысла тратить попусту ресурсы, если и так понятно, что с запросом что-то не так
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Очень важно, чтобы все объекты цепочки имели общий интерфейс. Обычно каждому конкретному обработчику достаточно знать только то, что следующий объект в цепи имеет метод выполнить. Благодаря этому связи между объектами цепочки будут более гибкими. Кроме того, вы сможете формировать цепочки на лету из разнообразных объектов, не привязываясь к конкретным классам.
                </Paragraph>
            </Typography>)
    }
}