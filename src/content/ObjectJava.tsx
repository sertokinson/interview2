import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';
import SyntaxHighlighter from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";

const {Paragraph, Text, Title} = Typography;

export default class ObjectJava extends React.Component {
    render() {
        return (
            <Typography>
                <Paragraph style={{fontSize: 20}}>
                    Класс Object является корнем иерархии классов. У каждого класса есть <Text code>Object</Text> как
                    суперкласс. Все объекты, включая массивы, реализуют методы этого класса.
                </Paragraph>
                <Title>Метод getClass()</Title>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"public final Class getClass()"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Возвращает Объект <Text code>Class</Text>, представляющий класс времени исполнения (runtime class)
                    этого объекта.
                </Paragraph>
                <Title>Метод hashCode()</Title>
                <SyntaxHighlighter language="java" style={darcula}>
                    public int hashCode()
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Возвращает Целочисленное (int) значение хэш-кода для этого объекта.
                </Paragraph>
                <Title>Метод equals</Title>
                <SyntaxHighlighter language="java" style={darcula}>
                    public boolean equals(Object obj)
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li>Оно рефлексивно: для любого ненулевого ссылочного значения x, x.equals(x) должно возвращать true.</li>
                        <li>Оно симметрично: для любых ненулевых ссылочных значений x и y x.equals(y) должен возвращать true, только если y.equals(x) возвращает true.</li>
                        <li>Оно транзитивно: для любых ненулевых ссылочных значений x, y и z, если x.equals(y) возвращает true, а y.equals(z) возвращает true, тогда x.equals(z) должен возвращать true</li>
                        <li>Оно непротиворечиво (консистентно): для любых ненулевых ссылочных значений x и y множественные вызовы x.equals(y) последовательно возвращают true или последовательно возвращают false при условии, что никакая информация, используемая в сравнениях equals на объектах, не изменяется.</li>
                        <li>Для любого ненулевого ссылочного значения x, x.equals(null) должен возвращать false.</li>
                    </ul>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Метод equals для класса Object реализует максимально различающее возможное отношение эквивалентности на объектах; то есть для любых ненулевых ссылочных значений x и y этот метод возвращает true только тогда, когда x и y ссылаются на один и тот же объект (x == y имеет значение true).
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Обратите внимание, что обычно необходимо переопределять метод hashCode всякий раз, когда метод equals переопределяется, чтобы поддерживать общий контракт для метода hashCode, в котором говорится, что равные объекты должны иметь одинаковые хэш-коды.
                </Paragraph>
                <Title>Метод clone</Title>
                <SyntaxHighlighter language="java" style={darcula}>
                    protected Object clone() throws CloneNotSupportedException
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Создает и возвращает копию этого объекта. Точное значение "копия" может зависеть от класса объекта. Общее намерение состоит в том, что для любого объекта x, выражения будут верны:
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"x.clone() != x;\n" +
                    "x.clone().getClass() == x.getClass();\n"+
                    "x.clone().equals(x);"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Метод clone для класса Object выполняет определенную операцию клонирования. Во-первых, если класс этого объекта не реализует интерфейс Cloneable, генерируется исключение CloneNotSupportedException.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Класс Object сам по себе не реализует интерфейс Cloneable, поэтому вызов метода clone для объекта, класс которого Object, приведет к возникновению исключения во время выполнения.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Cloneable – это так называемый интерфейс-маркер, который не содержит никаких методов. Он используется, чтобы маркировать (помечать) некоторые классы.
                    Если разработчик класса считает, что объекты класса можно клонировать, он помечает класс этим интерфейсом (наследует класс от Cloneable).
                    Если разработчика не устраивает стандартная реализация метода clone, он должен написать свою, которая будет создавать дубликат объекта правильным образом.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    переопределять метод все же придется. Метод clone() объявлен как protected, так что он доступен для вызова только классам из его пакета (java.lang.*) или классам-наследникам.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"class Point implements Cloneable\n" +
                    "{\n" +
                    " int x;\n" +
                    " int y;\n" +
                    "\n" +
                    " public ObjectJava clone()\n" +
                    " {\n" +
                    "  return super.clone();\n" +
                    " }\n" +
                    "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Или ты можешь написать реализацию метода clone полностью сам:
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"class Point\n" +
                    "{\n" +
                    " int x;\n" +
                    " int y;\n" +
                    "\n" +
                    " public ObjectJava clone()\n" +
                    " {\n" +
                    "  Point point = new Point();\n" +
                    "  point.x = this.x;\n" +
                    "  point.y = this.y;\n" +
                    "  return point;\n" +
                    " }\n" +
                    "}"}
                </SyntaxHighlighter>
                <Title>Метод toString</Title>
                <SyntaxHighlighter language="java" style={darcula}>
                    public String toString()
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Возвращает строковое представление объекта. В общем случае метод toString возвращает строку, которая является "текстовым представлением" этого объекта. Результатом должно быть краткое, но информативное представление, которое легко читается человеком. Рекомендуется, чтобы все подклассы переопределяли этот метод.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Метод toString для класса Object возвращает строку, состоящую из имени класса, экземпляром которого является объект, символа знака "@" и шестнадцатеричного представления без знака хэш-кода объекта. Другими словами, этот метод возвращает строку, равную значению:
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    getClass().getName() + '@' + Integer.toHexString(hashCode())
                </SyntaxHighlighter>
                <Title>Метод notify</Title>
                <SyntaxHighlighter language="java" style={darcula}>
                    public final void notify()
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Пробуждает один поток, который ожидает на мониторе этого объекта. Если какие-либо потоки ожидают этого объекта, один из них выбирается для пробуждения. Выбор является произвольным и происходит на усмотрение реализации. Поток ожидает на мониторе объекта, вызывая один из методов wait.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Пробужденный поток не сможет продолжить работу, пока текущий поток не снимет блокировку этого объекта. Пробужденный поток будет конкурировать обычным образом с любыми другими потоками, которые могут активно конкурировать за синхронизацию на этом объекте; например, пробужденный поток не имеет надежных привилегий или недостатков в качестве следующего потока для блокировки этого объекта.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Этот метод должен вызываться только потоком, который является владельцем монитора этого объекта. Поток становится владельцем монитора объекта одним из трех способов:
                    <ul>
                        <li>Выполняя synchronized метод экземпляра этого объекта.</li>
                        <li>Выполняя тело synchronized выражения, которое синхронизируется на объекте.</li>
                        <li>Для объектов типа Class, выполняя synchronized static метод этого класса.</li>
                    </ul>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Только один поток одновременно может владеть монитором объекта.

                    Выбрасывает исключения:

                    IllegalMonitorStateException - если текущий поток не является владельцем монитора этого объекта.
                </Paragraph>
                <Title>Метод notifyAll</Title>
                <SyntaxHighlighter language="java" style={darcula}>
                    public final void notifyAll()
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Пробуждает все потоки, которые ожидают на мониторе этого объекта. Поток ожидает на мониторе объекта, вызывая один из методов wait.
                </Paragraph>
                <Title>Метод wait с аргументом timeout</Title>
                <SyntaxHighlighter language="java" style={darcula}>
                    public final void wait(long timeout) throws InterruptedException
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Заставляет текущий поток ждать, пока другой поток не вызовет метод notify() или метод notifyAll() для этого объекта, или пока не истечет указанное количество времени.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Поток также может просыпаться без уведомления, прерывания или истечения тайм-аута, так называемое ложное пробуждение (spurious wakeup). Хотя это редко случается на практике, приложения должны защищаться от него, проверяя условие, которое должно было вызвать пробуждение потока, и продолжая ждать, если условие не выполняется. Другими словами, ожидания всегда должны происходить в циклах, например:
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"synchronized (obj) {\n" +
                    "   while (<условие не выполняется>)\n" +
                    "       obj.wait(timeout);\n" +
                    "   ... // Выполняем действие подходящее для условия\n" +
                    "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Если текущий поток прерывается каким-либо потоком до или во время ожидания, генерируется исключение InterruptedException. Это исключение не выдается, пока состояние блокировки этого объекта не будет восстановлено, как описано выше.
                </Paragraph>
                <Title>Метод wait с аргументами timeout и nanos</Title>
                <SyntaxHighlighter language="java" style={darcula}>
                    public final void wait(long timeout, int nanos) throws InterruptedException
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Заставляет текущий поток ждать, пока другой поток не вызовет метод notify() или метод notifyAll() для этого объекта, или какой-либо другой поток прервет текущий поток, или пока не истекло определенное количество реального времени.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Этот метод аналогичен методу wait с одним аргументом, но он позволяет лучше контролировать время ожидания уведомления перед тем, как отказаться. Количество реального времени, измеряемое в наносекундах, определяется как:
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    1000000*timeout+nanos
                </SyntaxHighlighter>
                <Title>Метод wait без аргументов</Title>
                <SyntaxHighlighter language="java" style={darcula}>
                    public final void wait() throws InterruptedException
                </SyntaxHighlighter>
                <Title>Метод finalize</Title>
                <SyntaxHighlighter language="java" style={darcula}>
                    protected void finalize() throws Throwable
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Вызывается сборщиком мусора на объекте, когда сборщик мусора определяет, что больше нет ссылок на объект. Подкласс переопределяет метод finalize для удаления системных ресурсов или для другой очистки.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Лучше не трогать
                </Paragraph>
            </Typography>)
    }
}