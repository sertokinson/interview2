import React from 'react';
import 'antd/dist/antd.css';
import {Image, Typography} from 'antd';
import SyntaxHighlighter from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import stack from './Stack.jpg';
import table_1 from "./table-1.png";
import table_2 from "./table-2.png";

const {Paragraph, Title, Text} = Typography;

export default class Primitive extends React.Component {
    render() {
        return (
            <Typography>
                <Title>Память стека</Title>
                <Paragraph style={{fontSize: 20}}>
                    Память стека используется для статического выделения памяти и выполнения
                    потока.
                    Он содержит примитивные значения, специфичные для метода, и ссылки на объекты, находящиеся в куче,
                    на которые ссылается метод.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Доступ к этой памяти осуществляется в порядке «последний пришел - первым вышел» (LIFO).
                    Каждый раз, когда вызывается новый метод, создается новый блок в верхней части стека, который
                    содержит значения, специфичные для этого метода, такие как примитивные переменные и ссылки на
                    объекты.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Когда метод заканчивает выполнение, его соответствующий кадр стека сбрасывается, поток возвращается
                    к вызывающему методу, и пространство становится доступным для следующего метода.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li>Он растет и сжимается при вызове и возвращении новых методов соответственно</li>
                        <li>Переменные внутри стека существуют только до тех пор, пока работает метод, который их
                            создал
                        </li>
                        <li>Он автоматически распределяется и освобождается, когда метод завершает выполнение</li>
                        <li>Если эта память заполнена, <Text code>Java</Text> выдает <Text
                            code>java.lang.StackOverFlowError</Text></li>
                        <li>Доступ к этой памяти быстрый по сравнению с кучей памяти</li>
                        <li>Эта память является потокобезопасной, поскольку каждый поток работает в своем собственном
                            стеке
                        </li>
                    </ul>
                </Paragraph>
                <Title>Пространство кучи в Java</Title>
                <Paragraph style={{fontSize: 20}}>
                    Пространство кучи в используется для динамического выделения памяти для
                    объектов и классов <Text code>JRE</Text> во время выполнения . Новые объекты
                    всегда создаются в пространстве кучи, а ссылки на эти объекты хранятся в памяти стека.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Эти объекты имеют глобальный доступ и могут быть доступны из любого места в приложении.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Эта модель памяти далее разбита на более мелкие части, называемые поколениями, это:
                    <ul>
                        <li><Text strong>Молодое поколение</Text> - это то, где все новые объекты выделяются и стареют.
                            Незначительная сборка мусора происходит при заполнении
                        </li>
                        <li><Text strong>Старое или прочное поколение</Text> - это место, где хранятся долго выживающие
                            объекты. Когда объекты хранятся в молодом поколении, устанавливается порог для возраста
                            объекта, а когда этот порог достигается, объект перемещается в старое поколение.
                        </li>
                        <li>Доступ к нему осуществляется через сложные методы управления памятью, в том числе молодое
                            поколение, старое или постоянное поколение и постоянное поколение
                        </li>
                        <li>Если пространство кучи заполнено, <Text code>Java</Text> выдает <Text
                            code>java.lang.OutOfMemoryError</Text></li>
                        <li>Доступ к этой памяти относительно медленнее, чем к памяти стека</li>
                        <li>Эта память, в отличие от стека, не освобождается автоматически. Для освобождения
                            неиспользуемых объектов требуется сборщик мусора, чтобы сохранить эффективность
                            использования памяти.
                        </li>
                        <li>В отличие от стека, куча не является потокобезопасной и должна быть защищена путем
                            правильной синхронизации кода
                        </li>
                    </ul>
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"class Person {\n" +
                    "    int pid;\n" +
                    "    String name;\n" +
                    "     \n" +
                    "    // constructor, setters/getters\n" +
                    "}\n" +
                    " \n" +
                    "public class Driver {\n" +
                    "    public static void main(String[] args) {\n" +
                    "        int id = 23;\n" +
                    "        String pName = \"Jon\";\n" +
                    "        Person p = null;\n" +
                    "        p = new Person(id, pName);\n" +
                    "    }\n" +
                    "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Давайте проанализируем это шаг за шагом:
                    <ul>
                        <li>При входе в метод <Text code>main ()</Text> в стековой памяти будет создано пространство для хранения примитивов и ссылок этого метода.</li>
                        <li>Примитивное значение целочисленного  идентификатора будет храниться непосредственно в памяти стека</li>
                        <li>Ссылочная переменная p  типа <Text code>Person</Text> также будет создана в стековой памяти, которая будет указывать на фактический объект в куче.</li>
                        <li>Вызов параметризованного конструктора <Text code>Person (int, String)</Text> из <Text code>main ()</Text> выделит дополнительную память поверх предыдущего стека.</li>
                        <li>будет хранить: объект ссылка вызывающего объекта в памяти стека</li>
                        <li>Примитивное значение <Text code>id</Text> в памяти стека</li>
                        <li>Упоминание переменной <Text code>personName</Text>, который будет указывать на реальную строку из строки пула в динамической памяти</li>
                        <li>Этот конструктор по умолчанию дополнительно вызывает метод <Text code>setPersonName()</Text>, для которого дальнейшее выделение будет происходить в стековой памяти поверх предыдущей. Это снова будет хранить переменные способом, описанным выше.</li>
                        <li>Однако для вновь созданного объекта <Text code>p</Text> типа <Text code>Person</Text> все переменные экземпляра будут сохранены в памяти кучи.</li>
                    </ul>
                </Paragraph>
                <Image src={stack}/>
                <Image width={800} src={table_1}/>
                <Image width={800} src={table_2}/>
            </Typography>)
    }
}