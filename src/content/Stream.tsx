import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';
import SyntaxHighlighter from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";

const {Paragraph, Text, Title} = Typography;

export default class Stream extends React.Component {
    render() {
        return (
            <Typography>
                <Title>Общие понятия</Title>
                <Title level={2}>Lambda</Title>
                <Paragraph style={{fontSize: 20}}>
                    Это упрощенное написание аннонимного класса, который является реализацие функционального интерфейса
                </Paragraph>
                <Title level={2}>Функциональный интерфейс</Title>
                <Paragraph style={{fontSize: 20}}>
                    Это интерфейс в котором есть лишь один абстрактный метод
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li><Text code>Consumer</Text> (Потребитель) - принимает на вход значение и ничего не возвращает <Text code>forEach</Text>, <Text code>peek</Text></li>
                        <li><Text code>BiConsumer</Text> - принимает на вход 2 значения и ничего не возвращает <Text code>forEach</Text></li>
                        <li><Text code>Supplier</Text> (Поставщик) - ничего не принимает и возвращает значение (Math.random) <Text code>generate</Text>, <Text code>collect</Text> (например чтобы создать объект ::new куда складывать)</li>
                        <li><Text code>Predicate</Text> - принимает на вход значение и возвращает boolean <Text code>filter</Text>, <Text code>allMath</Text>,<Text code>anyMath</Text>, <Text code>noneMath</Text></li>
                        <li><Text code>Function</Text> - принимает на вход значение и возвращает значение <Text code>map</Text>, <Text code>flatMap</Text></li>
                        <li><Text code>UnaryOperator</Text> - принимает на вход значение и возвращает это же значение <Text code>iterate</Text></li>
                        <li><Text code>BiFunction</Text> - принимает на вход 2 значения и возвращает одно <Text code>reduce</Text></li>
                        <li><Text code>BinaryOperator</Text> - принимает на вход 2 одинаковых значения и возвращает это же <Text code>reduce</Text></li>
                    </ul>
                </Paragraph>
                <Title level={2}>Бесконечный поток</Title>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li><Text code>{"Stream.generate(Supplier<?> s)"}</Text></li>
                        <li><Text code>{"Stream.iterate(final T seed, final UnaryOperator<T> f)"}</Text> - seed начальное значение</li>
                    </ul>
                    Не забывать ограничевать размер <Text code>limit</Text>
                </Paragraph>
                <Title level={2}>default</Title>
                <Paragraph style={{fontSize: 20}}>
                    Так обозначают методы в интерфейсах с дефолтной реализацией, на практике это нужно чтобы расширить интерфес и при этом не пришлось бы его реализовывать везде где этот интерфес имплементируется
                </Paragraph>
                <Title level={2}>Поток</Title>
                <Paragraph style={{fontSize: 20}}>
                    Последовательность элементов, в которой элементы не сохраняются, а их источник не модифицируется, поток открыт пока не будет вызвана терминальная операция
                </Paragraph>
                <Title level={2}>Чистая функция</Title>
                <Paragraph style={{fontSize: 20}}>
                    При одних и тех же входных данных возврощается одинаковый результат
                </Paragraph>
                <Title>Методы Stream</Title>
                <Title level={2}>range, rangeClosed, boxed</Title>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li><Text code>range</Text> - создает поток примитивного типа <Text code>IntStream</Text> или <Text code>LongStream</Text> не включительно, <Text code>rangeClosed</Text> включительно</li>
                        <li><Text code>boxed</Text> - нужен для того чтобы из примитивного типа перейти на ссылочный, также можно с помощью <Text code>mapToObject</Text> и обратно при помощи <Text code>mapToInt</Text></li>
                    </ul>
                </Paragraph>
                <Title level={2}>reduce</Title>
                <Paragraph style={{fontSize: 20}}>
                    используют для аккумулирования каких-то результатов <Text code>{"reduce((acc, y) -> acc - y))"}</Text>, притом вначале <Text code>acc</Text> будет равен первому элементу в потоке, а <Text code>y</Text> второму является последней терминальной операцией
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"IntStream.range(1, 10).reduce((acc, y) -> acc - y).orElse(0)\n" +
                    "acc=1, y=2\n" +
                    "acc=3, y=3\n" +
                    "acc=6, y=4"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Если нужно проделать какие-то манируляции и с первым значением, то нужно указать значение аккумулятора
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"IntStream.range(1, 10).reduce(0, (acc, y) -> acc + 2*y).orElse(0)\n" +
                    "acc=0, y=1\n" +
                    "acc=2, y=2\n" +
                    "acc=6, y=3"}
                </SyntaxHighlighter>
                <Title level={2}>anyMath, allMath, noneMath, findAny, findFirst</Title>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li><Text code>anyMath</Text> - любой кто удовлетворяет условию, <Text code>false</Text> для пустого потока вне зависимости от переданного предиката (он его просто не прочитает)</li>
                        <li><Text code>allMath</Text> - все кто удовлетворяет условию, <Text code>true</Text> для пустого потока вне зависимости от переданного предиката (он его просто не прочитает)</li>
                        <li><Text code>noneMath</Text> - все кто не удовлетворяет условию, <Text code>true</Text> для пустого потока вне зависимости от переданного предиката (он его просто не прочитает)</li>
                        <li><Text code>findFirst</Text> - первый попавшийся после предыдущих промежуточных операций или <Text code>filter</Text></li>
                        <li><Text code>findAny</Text> - любой попавшийся, используется в параллельных потоках</li>
                    </ul>
                </Paragraph>
                <Title level={2}>map и flatMap</Title>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li><Text code>map</Text> - если каждый элемент потока преобразуется в одно значение</li>
                        <li><Text code>flatMap</Text> - если каждый элемент преобразуется в несколько значений и получившийся поток нужно разгладить</li>
                    </ul>
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"public class Main {\n" +
                    "    static class Customer {\n" +
                    "        String name;\n" +
                    "        List<Order> orders = new ArrayList<>();\n" +
                    "\n" +
                    "        public List<Order> getOrders() {\n" +
                    "            return orders;\n" +
                    "        }\n" +
                    "\n" +
                    "        Customer add(Order order){\n" +
                    "            orders.add(order);\n" +
                    "            return this;\n" +
                    "        }\n" +
                    "\n" +
                    "        public Customer(String name) {\n" +
                    "            this.name = name;\n" +
                    "        }\n" +
                    "    }\n" +
                    "\n" +
                    "    static class Order {\n" +
                    "        Integer id;\n" +
                    "\n" +
                    "        public Order(Integer id) {\n" +
                    "            this.id = id;\n" +
                    "        }\n" +
                    "\n" +
                    "        @Override\n" +
                    "        public String toString() {\n" +
                    "            return \"Order{\" +\n" +
                    "                    \"id=\" + id +\n" +
                    "                    '}';\n" +
                    "        }\n" +
                    "    }\n" +
                    "\n" +
                    "    public static void main(String[] args) {\n" +
                    "        List<Order> collect = Stream.of(\n" +
                    "                new Customer(\"Sergey\").add(new Order(1)).add(new Order(2)),\n" +
                    "                new Customer(\"Oleg\").add(new Order(0)).add(new Order(3)))\n" +
                    "                .flatMap(customer -> customer.getOrders().stream())\n" +
                    "                .collect(Collectors.toList());\n" +
                    "        System.out.println(collect);\n" +
                    "}\n" +
                    "\n" +
                    "\n"+
                    "[Order{id=1}, Order{id=2}, Order{id=0}, Order{id=3}]\n"}
                </SyntaxHighlighter>
                <Title level={2}>parallel и sequential</Title>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li><Text code>parallel</Text> - из последовыательного потока делает параллельный</li>
                        <li><Text code>sequential</Text> - из параллельного делает последовательный</li>
                    </ul>
                    По умолчанию для распараллеливания потоков используется общий пул разветвления-соеденения. Размер пула равен количеству процессоров, узнать которое позволяет метод <Text code>Runtime.getRuntime().availableProcessors()</Text>. Управление пулом сопряжено с накладными расходами - нужно разбивать работу на части и объеденять частичные результаты в общий ответ.
                    Чтобы оправдвтть эти расходы должны выполняться следующие условия:
                    <ul>
                        <li>наличия большого объема данных или</li>
                        <li>значительное время обработки одного элемента и</li>
                        <li>источник данных должен легко разбиваться на части и</li>
                        <li>операции должны не иметь состояния и быть ассоциативными</li>
                    </ul>
                    Если <Text code>N</Text> - количество элементов данных, а <Text code>Q</Text> - время обработки одного элемента, то в общем случае необходимо чтобы <Text code>{"N*Q > 10 000"}</Text>. Следующие условие означает что необходима структура данных которую легко разбить на части, например массив. И наконец, если при выполнении операций сохраняется некоторое состояние или результат зависит от порядка их выполнения, то это очевидно привидет к проблемам при распараллеливании
                </Paragraph>
                <Title>Collectors</Title>
                <Title level={2}>Подчиненный коллектор</Title>
                <Paragraph style={{fontSize: 20}}>
                    Нужен для того чтобы не просто собрать результат в список а провести еще какие то манипуляции над ним, например <Text code>Collectors.counting()</Text>
                </Paragraph>
                <Title level={2}>Неизменяемая коллекция</Title>
                <Paragraph style={{fontSize: 20}}>
                    Означет что элементы нельзя добавлять, изменять и удалять а при попытке выбросится исключение <Text code>UnsupportedOperationException</Text> для создании такой коллекции обычно делается обертка над существующей коллекцией, в <Text code>Stream API</Text> с помощью <Text code>Collectors.collectingAndThen</Text> который принимает подчиненный коллектор и функцию
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"Arrays.stream(elements).collect(Collectors.collectingAndThen(Collectors.toList(), Collections::unmodifiableList));"}
                </SyntaxHighlighter>
                <Title level={2}>partitionBy и groupingBy</Title>
                <Paragraph style={{fontSize: 20}}>
                    Статические методы <Text code>Collectors</Text>
                    <ul>
                        <li><Text code>partitionBy</Text> - принимает на вход предикат или предикат и подчиненный коллектор для разбияние списка на два с ключами true или false если не удовлетворяет предикату</li>
                        <li><Text code>groupingBy</Text> - принимает на вход функцию для разбияние списка на группы в мапу</li>
                    </ul>
                </Paragraph>
                <Title level={2}>computeIfAbsent и computeIfPresent</Title>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li><Text code>computeIfAbsent</Text> - принимает функцию, возвращает значение заданного ключа, если он присутствует или использует заданную функцию для вычесления нового значения и сохранения его в отображении (Используется например для Кеша)</li>
                        <li><Text code>computeIfPresent</Text> - вычислить новое значение вместо предыдущего </li>
                    </ul>
                </Paragraph>
                <Title>Function methods</Title>
                <Title level={2}>identity</Title>
                <Paragraph style={{fontSize: 20}}>
                    Это статический метод является отображением объекта самого в себя, аналогичная запись <Text code>{"v => v"}</Text>
                </Paragraph>
                <Title level={2}>compose и andThen</Title>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li><Text code>compose</Text> - до применения функции</li>
                        <li><Text code>andThen</Text> - после</li>
                    </ul>
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"Function<Integer, Integer> add = x ->x+1;\n" +
                    "Function<Integer, Integer> multi = x ->x*2;\n" +
                    "\n" +
                    "add.compose(multi).andThen(add).apply(1);\n" +
                    "// 1*2+2+2"}
                </SyntaxHighlighter>
                <Title>Optional</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>Optional</Text> нужен для того чтобы сообщить пользователю о том, что возвращаемое значение на законных основаниях может быть равно <Text code>null</Text>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Хотя <Text code>Optional</Text> ссылочный тип, ему никогда не следует присваивать значение <Text code>null</Text>. Это считается серьезной ошибкой
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Экземпляр типа <Text code>Optional</Text> неизменяем, хотя он может содержать ссылки на изменяемые значения
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Использовать метод <Text code>get</Text>, но только если есть уверенность, что <Text code>Optional</Text> не пуст потому что будет исключение <Text code>NoSuchElementException</Text>, в противном случае использовать один из вариантов метода <Text code>orElse</Text>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>Optional</Text> является несериализуемым, поэтому и его содержимое тоже не будет сериализоваться, поля класса не рекомендуется объявлять <Text code>Optional</Text>
                </Paragraph>
                <Title level={2}>orElse и orElseGet</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>orElse</Text> выполнится в любом случае, а <Text code>orElseGet</Text> принимает <Text code>Supplier</Text> с отложенной обработкой это означает что этот блок будет выполнен, если наступит это событие
                </Paragraph>
            </Typography>)
    }
}