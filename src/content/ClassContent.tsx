import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';
import SyntaxHighlighter from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";

const {Paragraph, Text, Title} = Typography;

export default class ClassContent extends React.Component {
    render() {
        return (
            <Typography>
                <Title>Анонимные классы</Title>
                <Paragraph style={{fontSize: 20}}>
                    Анонимный класс нужен для того чтобы создать объект безымянного класса реализующий интерфейс.
                    В документации <Text code>Oracle</Text> приведена хорошая рекомендация:
                    «Применяйте анонимные классы, если вам нужен локальный класс для одноразового использования».
                    Анонимный класс не может содержать статические переменные и методы. (){};
                </Paragraph>
                <Title>Внутренние классы</Title>
                <Paragraph style={{fontSize: 20}}>
                    Внутренние классы-члены ассоциируются не с самим внешним классом, а с его экземпляром,
                    т.е. каждый экземпляр внутреннего класса связан с экземпляром его окружающего класса.
                    Вы не можете создать экземпляр внутреннего класса без привязки к экземпляру внешнего класса.
                    То есть сперва должен быть создан экземпляр внешнего класса, а только затем уже вы можете создать экземпляр внутреннего класса.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"public class Outer {\n" +
                    "    private int outInt = 10;\n" +
                    "\n" +
                    "    class  InnerClass {\n" +
                    "\n" +
                    "        int getOutInt() {\n" +
                    "            return outInt;\n" +
                    "        }\n" +
                    "    }\n" +
                    "\n" +
                    "    InnerClass getInnerClass() {\n" +
                    "        return  new InnerClass();\n" +
                    "    }\n" +
                    "}\n" +
                    "public static void main (String[] args) throws java.lang.Exception  { \n" +
                    "        Outer outer = new Outer();\n" +
                    "        Outer.InnerClass innerClass = outer.getInnerClass();\n" +
                    "        System.out.println(\"getOutInt = \" + innerClass.getOutInt());\n" +
                    "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Как и другие поля класса, вложенные классы могут быть объявлены как <Text code>private</Text>, <Text code>public</Text>, <Text code>protected</Text>, или <Text code>package private</Text>.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    При этом не статические классы имеют доступ к полям содержащего класса, даже если они объявлены как <Text code>private</Text>.
                    Статические же <Text strong>не</Text> имеют доступ к членам внешнего класса.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"public class OuterClass { \n" +
                    "    public void method() { ... } \n" +
                    "\n" +
                    "    public class InnerClass { \n" +
                    "        public void method() { ... } \n" +
                    "\n" +
                    "        public void anotherMethod() { \n" +
                    "            method(); \n" +
                    "        } \n" +
                    "    } \n" +
                    "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Вызов <Text code>method()</Text> из <Text code>anotherMethod</Text> обратится к методу класса <Text code>InnerClass</Text>.
                    Для обращения к методу обрамляющего класса необходимо использовать конструкцию вида <Text code>OuterClass.this.method()</Text>
                </Paragraph>
                <Title>Локальные классы</Title>
                <Paragraph style={{fontSize: 20}}>
                    Локальные классы определяются в блоке кода. На практике чаще всего объявление происходит в методе некоторого другого класса.
                    Хотя объявлять локальный класс можно внутри статических и нестатических блоков инициализации.
                    Локальный класс имеет доступ к членам класса, в котором он объявлен
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"public class Outer {\n" +
                    "    String strO = \"Outer\";\n" +
                    "\n" +
                    "    void printVars() {\n" +
                    "        final int i = 10;\n" +
                    "\n" +
                    "        class Local {\n" +
                    "            String strL = \"Local\";\n" +
                    "\n" +
                    "            void printLocal() {\n" +
                    "                System.out.println(\"strL: \" + strL);\n" +
                    "                System.out.println(\"strO: \" + strO);\n" +
                    "                System.out.println(\"finalInt: \" + i);\n" +
                    "            }\n" +
                    "        }\n" +
                    "\n" +
                    "        Local local = new Local();\n" +
                    "        local.printLocal();\n" +
                    "    }\n" +
                    "}\n" +
                    "public static void main (String[] args) throws java.lang.Exception  {\n" +
                    "        Outer o = new Outer();\n" +
                    "        o.printVars();\n" +
                    "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Также, локальный класс имеет доступ к локальным переменным. Локальные классы имеют доступ только к переменным, объявленным как <Text code>final</Text>.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Однако начиная с <Text code>Java SE 8</Text>, локальные классы имеют доступ к финальным (final) локальным переменным и параметрам, а также к неизменяемым (effectively final) переменным, т.е. к переменным, которые не изменились с момента инициализации.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Т.е. в предыдущем примере можно было написать не <Text code>final int i = 10;</Text>, а просто <Text code>int i = 10;</Text>,
                    при условии, что далее не будет происходить с ней ничего, даже банальных <Text code>i = 11;</Text>. В таком случае
                    <Text code>System.out.println("finalInt: " + i);</Text> выдаст ошибку.
                </Paragraph>
                <Title level={2}>Собственно, ограничения локальных классов:</Title>
                <Paragraph style={{fontSize: 20}}>
                   <ul>
                       <li>Они видны только в пределах блока, в котором объявлены;</li>
                       <li>Они не могут быть объявлены как <Text code>private</Text>, <Text code>public</Text>, <Text code>protected</Text> или <Text code>static</Text>;</li>
                       <li>Они не могут иметь внутри себя статических объявлений (полей, методов, классов); исключением являются константы <Text code>static final</Text>;</li>
                   </ul>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Внутренние классы — это классы для выделения в программе некой сущности, которая неразрывно связана с другой сущностью.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Руль, сиденье, педали — это составные части велосипеда. Отдельно от велосипеда они не имеют смысла.
                </Paragraph>
            </Typography>)
    }
}