import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';
import SyntaxHighlighter from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";

const {Paragraph, Title, Text} = Typography;

export default class Generic extends React.Component {
    render() {
        return (
            <Typography>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"ArrayList stringList = new ArrayList();\n" +
                    "stringList.add(\"abc\"); //добавляем строку в список\n" +
                    "stringList.add(\"abc\"); //добавляем строку в список\n" +
                    "stringList.add( 1 ); //добавляем число в список\n" +
                    "\n" +
                    "for(ObjectJava o: stringList)\n" +
                    "{\n" +
                    " String s = (String) o; //тут будет исключение, когда дойдем до элемента-числа\n" +
                    "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Как решают проблему Generic’и:
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"ArrayList<String> stringList = new ArrayList<String>();\n" +
                    "stringList.add(\"abc\"); //добавляем строку в список\n" +
                    "stringList.add(\"abc\"); //добавляем строку в список\n" +
                    "stringList.add( 1 ); //тут будет ошибка компиляции\n" +
                    "\n" +
                    "for(ObjectJava o: stringList)\n" +
                    "{\n" +
                    " String s = (String) o;\n" +
                    "}"}
                </SyntaxHighlighter>
                <Title>Метатипы и PECS</Title>
                <Paragraph style={{fontSize: 20}}>
                    Метатипом называется параметрический тип, в котором встречается вопросительный знак <Text code>?</Text>, возможно с ограничением сверху или снизу
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Акроним <Text code>PECS</Text> означает Producer Extends Consumer Super (поставщик - extends, потребитель - super). Если параметрический тип будет выступать в обеих ролях, то не используйте метатипы вовсе - обоим требованиям удовлетворяет только тип, заданный явно
                </Paragraph>
            </Typography>)
    }
}