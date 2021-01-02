import React from 'react';
import 'antd/dist/antd.css';
import {Typography, Pagination} from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/hljs';


const {Paragraph, Title, Text} = Typography;

export default class Solid extends React.Component {
    state = {
        page: 1
    }

    render() {
        switch (this.state.page) {
            case 2:
                return <Typography>
                    <Title>Open Closed Principle (Принцип открытости/закрытости)</Title>
                    <Paragraph style={{fontSize: 20}}>
                        Этот принцип емко описывают так: программные сущности (классы, модули, функции и т.п.)
                        должны быть открыты для расширения, но закрыты для изменения. Это означает, что должна быть
                        возможность изменять внешнее поведение класса, не внося физические изменения в сам класс.
                    </Paragraph>
                    <Paragraph style={{fontSize: 20}}>
                        Продолжая наш пример с заказом, предположим, что нам нужно выполнять какие-то действия перед
                        обработкой заказа и после отправки письма с подтверждением. Вместо того, чтобы менять сам класс
                        <Text code>OrderProcessor</Text>,
                        мы расширим его и добьемся решения поставленной задачи, не нарушая принцип <Text code>OCP</Text>:
                    </Paragraph>
                    <SyntaxHighlighter language="java" style={darcula}>
                        {"public class OrderProcessorWithPreAndPostProcessing extends OrderProcessor {\n" +
                        "\n" +
                        "    @Override\n" +
                        "    public void process(Order order) {\n" +
                        "        beforeProcessing();\n" +
                        "        super.process(order);\n" +
                        "        afterProcessing();\n" +
                        "    }\n" +
                        "\n" +
                        "    private void beforeProcessing() {\n" +
                        "        // Осуществим некоторые действия перед обработкой заказа\n" +
                        "    }\n" +
                        "\n" +
                        "    private void afterProcessing() {\n" +
                        "        // Осуществим некоторые действия после обработки заказа\n" +
                        "    }\n" +
                        "}"}
                    </SyntaxHighlighter>
                    <Pagination style={{
                        paddingTop: 20
                    }} onChange={page => this.setState({page})} current={this.state.page} total={50}/>
                </Typography>
            case 3:
                return <Typography>
                    <Title>Liskov’s Substitution Principle (Принцип подстановки Барбары Лисков)</Title>
                    <Paragraph style={{fontSize: 20}}>
                        Его можно описать так: объекты в программе можно заменить их наследниками без изменения свойств
                        программы.
                    </Paragraph>
                    <Paragraph style={{fontSize: 20}}>
                        Это означает, что класс, разработанный путем расширения на основании базового класса,
                        должен переопределять его методы так, чтобы не нарушалась функциональность с точки зрения
                        клиента.
                        То есть, если разработчик расширяет ваш класс и использует его в приложении,
                        он не должен изменять ожидаемое поведение переопределенных методов.
                    </Paragraph>
                    <Pagination style={{
                        paddingTop: 20
                    }} onChange={page => this.setState({page})} current={this.state.page} total={50}/>
                </Typography>
            case 4:
                return <Typography>
                    <Title>Interface Segregation Principle (Принцип разделения интерфейса)</Title>
                    <Paragraph style={{fontSize: 20}}>
                        Характеризуется следующим утверждением: клиенты не должны быть вынуждены реализовывать методы,
                        которые они не будут использовать.
                        Принцип разделения интерфейсов говорит о том, что слишком «толстые» интерфейсы необходимо
                        разделять на более мелкие и специфические,
                        чтобы клиенты мелких интерфейсов знали только о методах, необходимых в работе.
                    </Paragraph>
                    <Paragraph style={{fontSize: 20}}>
                        <pre>
                            Разработчик Алекс создал интерфейс "отчет" и добавил два метода:
                            generateExcel() и generatedPdf(). Теперь клиент А хочет использовать этот интерфейс,
                            но он намерен использовать отчеты только в PDF-формате, а не в Excel. Устроит ли его такая функциональность.
                            Нет. Он должен будет реализовать два метода, один из которых по большому счету не нужен и существует только благодаря
                            Алексу — дизайнеру программного обеспечения. Клиент воспользуется либо другим интерфейсом,
                            либо оставит поле для Excel пустым.
                            Так в чем же решение? Оно состоит в разделении существующего интерфейса на два более мелких.
                            Один — отчет в формате PDF, второй — отчет в формате Excel. Это даст пользователю возможность использовать
                            только необходимый для него функционал.
                        </pre>
                    </Paragraph>
                    <Pagination style={{
                        paddingTop: 20
                    }} onChange={page => this.setState({page})} current={this.state.page} total={50}/>
                </Typography>
            case 5:
                return <Typography>
                    <Title>Dependency Inversion Principle (Принцип инверсии зависимостей)</Title>
                    <Paragraph style={{fontSize: 20}}>
                        Этот принцип <Text code>SOLID</Text> описывают так: <Text strong>зависимости внутри системы строятся на основе абстракций.</Text>
                        Модули верхнего уровня не зависят от модулей нижнего уровня.
                        Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.
                    </Paragraph>
                    <Paragraph style={{fontSize: 20}}>
                        Классическое применение этого принципа — <Text code>Spring framework</Text>. В рамках <Text code>Spring framework</Text> все модули выполнены в виде отдельных компонентов,
                        которые могут работать вместе. Они настолько автономны, что могут быть быть с такой же легкостью задействованы
                        в других программных модулях помимо <Text code>Spring framework</Text>.
                    </Paragraph>
                    <Paragraph style={{fontSize: 20}}>
                        Это достигнуто за счет зависимости закрытых и открытых принципов.
                        Все модули предоставляют доступ только к абстракции, которая может использоваться в другом модуле.
                    </Paragraph>
                    <Paragraph style={{fontSize: 20}}>
                        Попробуем продемонстрировать это на примере. Говоря о принципе единственной ответственности, мы рассматривали некоторый <Text code>OrderProcessor</Text>.
                        В данном примере наш <Text code>OrderProcessor</Text> зависит от двух конкретных классов <Text code>MySQLOrderRepository</Text> и <Text code>ConfirmationEmailSender</Text>.
                        Эти классы далеки от того, чтобы называться абстракциями.
                        И с точки зрения принципа <Text code>DIP</Text> было бы правильнее для начала создать некоторые абстракции, которые позволят нам оперировать в дальнейшем ими,
                        а не конкретными реализациями. Создадим два интерфейса <Text code>MailSender</Text> и <Text code>OrderRepository</Text>, которые и станут нашими абстракциями:
                    </Paragraph>
                    <SyntaxHighlighter language="java" style={darcula}>
                        {"public interface MailSender {\n" +
                        "    void sendConfirmationEmail(Order order);\n" +
                        "}\n" +
                        "\n" +
                        "public interface OrderRepository {\n" +
                        "    boolean save(Order order);\n" +
                        "}\n" +
                        "\n" +
                        "Теперь имплементируем данные интерфейсы в уже готовых для этого классах: \n" +
                        "public class ConfirmationEmailSender implements MailSender {\n" +
                        "\n" +
                        "    @Override\n" +
                        "    public void sendConfirmationEmail(Order order) {\n" +
                        "        String name = order.getCustomerName();\n" +
                        "        String email = order.getCustomerEmail();\n" +
                        "\n" +
                        "        // Шлем письмо клиенту\n" +
                        "    }\n" +
                        "\n" +
                        "}\n" +
                        "\n" +
                        "public class MySQLOrderRepository implements OrderRepository {\n" +
                        "\n" +
                        "    @Override\n" +
                        "    public boolean save(Order order) {\n" +
                        "        MySqlConnection connection = new MySqlConnection(\"database.url\");\n" +
                        "        // сохраняем заказ в базу данных\n" +
                        "\n" +
                        "        return true;\n" +
                        "    }\n" +
                        "}"}
                    </SyntaxHighlighter>
                    <Paragraph style={{fontSize: 20}}>
                        Мы провели подготовительную работу, чтобы наш класс <Text code>OrderProcessor</Text> зависит не от конкретных деталей, а от абстракций.
                        Внесем в него изменения, внедряя наши зависимости в конструкторе класса:
                    </Paragraph>
                    <SyntaxHighlighter language="java" style={darcula}>
                        {"public class OrderProcessor {\n" +
                        "\n" +
                        "    private MailSender mailSender;\n" +
                        "    private OrderRepository repository;\n" +
                        "\n" +
                        "    public OrderProcessor(MailSender mailSender, OrderRepository repository) {\n" +
                        "        this.mailSender = mailSender;\n" +
                        "        this.repository = repository;\n" +
                        "    }\n" +
                        "\n" +
                        "    public void process(Order order){\n" +
                        "        if (order.isValid() && repository.save(order)) {\n" +
                        "            mailSender.sendConfirmationEmail(order);\n" +
                        "        }\n" +
                        "    }\n" +
                        "}"}
                    </SyntaxHighlighter>
                    <Paragraph style={{fontSize: 20}}>
                        Теперь наш класс зависит от абстракций, а не от конкретных реализаций.
                        Можно без труда менять его поведение, внедряя нужную зависимость в момент создания экземпляра <Text code>OrderProcessor</Text>.
                    </Paragraph>
                    <Pagination style={{
                        paddingTop: 20
                    }} onChange={page => this.setState({page})} current={this.state.page} total={50}/>
                </Typography>
            default:
                return (
                    <Typography>
                        <Title>Single Responsibility Principle
                            (Принцип единственной ответственности)</Title>
                        <Paragraph style={{fontSize: 20}}>
                            Данный принцип гласит: никогда не должно быть больше одной причины изменить класс.
                            Представьте себе модуль, который обрабатывает заказы. Если заказ верно сформирован,
                            он сохраняет его в базу данных и высылает письмо для подтверждения заказа:
                        </Paragraph>
                        <SyntaxHighlighter language="java" style={darcula}>
                            {'public class OrderProcessor {\n' +
                            '\n' +
                            '    public void process(Order order){\n' +
                            '        if (order.isValid() && save(order)) {\n' +
                            '            sendConfirmationEmail(order);\n' +
                            '        }\n' +
                            '    }\n' +
                            '\n' +
                            '    private boolean save(Order order) {\n' +
                            '        MySqlConnection connection = new MySqlConnection("database.url");\n' +
                            '        // сохраняем заказ в базу данных\n' +
                            '\n' +
                            '        return true;\n' +
                            '    }\n' +
                            '\n' +
                            '    private void sendConfirmationEmail(Order order) {\n' +
                            '        String name = order.getCustomerName();\n' +
                            '        String email = order.getCustomerEmail();\n' +
                            '\n' +
                            '        // Шлем письмо клиенту\n' +
                            '    }\n' +
                            '}'}
                        </SyntaxHighlighter>
                        <Paragraph style={{fontSize: 20}}>
                            Такой модуль может измениться по трем причинам.
                            Во-первых может стать другой логика обработки заказа, во-вторых, способ его сохранения (тип
                            базы данных),
                            в-третьих — способ отправки письма подтверждения (скажем, вместо <Text code>email</Text> нужно отправлять
                            <Text code>SMS</Text>).
                        </Paragraph>
                        <Paragraph style={{fontSize: 20}}>
                            Принцип единственной обязанности подразумевает, что три аспекта этой проблемы на самом деле
                            — три разные обязанности.
                            А значит, должны находиться в разных классах.
                            Объединение нескольких сущностей, которые могут меняться в разное время и по разным
                            причинам, считается плохим проектным решением.
                        </Paragraph>
                        <SyntaxHighlighter language="java" style={darcula}>
                            {"public class MySQLOrderRepository {\n" +
                            "    public boolean save(Order order) {\n" +
                            "        MySqlConnection connection = new MySqlConnection(\"database.url\");\n" +
                            "        // сохраняем заказ в базу данных\n" +
                            "\n" +
                            "        return true;\n" +
                            "    }\n" +
                            "}\n" +
                            "\n" +
                            "public class ConfirmationEmailSender {\n" +
                            "    public void sendConfirmationEmail(Order order) {\n" +
                            "        String name = order.getCustomerName();\n" +
                            "        String email = order.getCustomerEmail();\n" +
                            "\n" +
                            "        // Шлем письмо клиенту\n" +
                            "    }\n" +
                            "}\n" +
                            "\n" +
                            "public class OrderProcessor {\n" +
                            "    public void process(Order order){\n" +
                            "\n" +
                            "        MySQLOrderRepository repository = new MySQLOrderRepository();\n" +
                            "        ConfirmationEmailSender mailSender = new ConfirmationEmailSender();\n" +
                            "\n" +
                            "        if (order.isValid() && repository.save(order)) {\n" +
                            "            mailSender.sendConfirmationEmail(order);\n" +
                            "        }\n" +
                            "    }\n" +
                            "\n" +
                            "}"}
                        </SyntaxHighlighter>
                        <Pagination style={{
                            paddingTop: 20
                        }} onChange={page => this.setState({page})} current={this.state.page} total={50}/>
                    </Typography>)
        }

    }
}