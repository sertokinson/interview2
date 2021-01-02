import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';
import SyntaxHighlighter from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";

const {Paragraph, Text} = Typography;

export default class TryWithResources extends React.Component {
    render() {
        return (
            <Typography>
                <Paragraph style={{fontSize: 20}}>
                    Иногда в процессе работы Java-программа взаимодействует с внешними ресурсами, например, с файлами на диске. Внутренние ресурсы — это объекты, созданные внутри Java-машины.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Операционная система ведет строгий учет доступных ресурсов, а также контролирует совместный доступ разных программ к ним. Например, если одна программа меняет какой-то файл, другая программа не может изменить (или удалить) этот файл.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Но после того, как вы закончили работать с файлом, этот ресурс (файл) нужно освободить: уведомить операционную систему, что он вам больше не нужен. Если вы этого не сделаете, ресурс будет продолжать числиться за вашей программой.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Для каждой запущенной программы операционная система ведет список занятых ресурсов. Если ваша программа превысит разрешенный ей лимит ресурсов, новые ресурсы операционная система вам уже не даст.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Хорошая новость в том, что если ваша программа завершилась, все ресурсы автоматически освобождаются (это делает сама операционная система).
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Плохая же новость в том, что если вы пишите серверное приложение, ваш сервер должен работать днями, неделями, месяцами без остановки. И если вы в день открываете 100 файлов и не закрываете их, через пару недель ваше приложение исчерпает свой лимит и упадет.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    У классов, которые используют внешние ресурсы, есть специальный метод для их освобождения — <Text code>close()</Text>.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"String path = \"c:\\projects\\log.txt\";"+
                        "FileOutputStream output = new FileOutputStream(path);"+
                        "output.write(1);"+
                        "output.close();"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Вроде все просто. Однако в процессе работы программы могут возникнуть исключения, и внешний ресурс так и не будет освобожден. А это очень плохо.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"try\n" +
                    "{\n" +
                    "   FileOutputStream output = new FileOutputStream(path);\n" +
                    "   output.write(1);\n" +
                    "   output.close();\n" +
                    "}\n" +
                    "catch (IOException e)\n" +
                    "{\n" +
                    "   e.printStackTrace();\n" +
                    "}\n" +
                    "finally\n" +
                    "{\n" +
                    "   output.close();\n" +
                    "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Этот код не скомпилируется, т.к. переменная <Text code>output</Text> объявлена внутри блока <Text code>try {}</Text>, а значит, не видна в блоке <Text code>finally</Text>
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"FileOutputStream output = new FileOutputStream(path);\n" +
                    "\n" +
                    "try\n" +
                    "{\n" +
                    "   output.write(1);\n" +
                    "   output.close();\n" +
                    "}\n" +
                    "catch (IOException e)\n" +
                    "{\n" +
                    "   e.printStackTrace();\n" +
                    "}\n" +
                    "finally\n" +
                    "{\n" +
                    "   output.close();\n" +
                    "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Хорошо, но не будет работать, если ошибка возникла при создании объекта FileOutputStream, а это может произойти очень легко.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"FileOutputStream output = null;\n" +
                    "\n" +
                    "try\n" +
                    "{\n" +
                    "   output = new FileOutputStream(path);\n" +
                    "   output.write(1);\n" +
                    "   output.close();\n" +
                    "}\n" +
                    "catch (IOException e)\n" +
                    "{\n" +
                    "   e.printStackTrace();\n" +
                    "}\n" +
                    "finally\n" +
                    "{\n" +
                    "   output.close();\n" +
                    "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Все еще есть несколько замечаний. Во-первых, если во время создания объекта <Text code>FileOutputStream</Text> возникнет ошибка, переменная output будет <Text code>null</Text>, и этот факт нужно учесть в блоке <Text code>finally</Text>.
                    Во-вторых, метод <Text code>close()</Text> вызывается в блоке <Text code>finally</Text> всегда, а значит, он не нужен в блоке <Text code>try</Text>. Финальный код будет выглядеть так:
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"FileOutputStream output = null;\n" +
                    "\n" +
                    "try\n" +
                    "{\n" +
                    "   output = new FileOutputStream(path);\n" +
                    "   output.write(1);\n" +
                    "}\n" +
                    "catch (IOException e)\n" +
                    "{\n" +
                    "   e.printStackTrace();\n" +
                    "}\n" +
                    "finally\n" +
                    "{\n" +
                    "   if (output != null)\n" +
                    "      output.close();\n" +
                    "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Создатели Java и тут решили нам подсыпать немного синтаксического сахарку. Начиная с 7-й версии Java, в ней появился новый оператор try-with-resources (try с ресурсами).
                    Он создан как раз для того, чтобы решать проблему с обязательным вызовом метода <Text code>close()</Text>. В общем случае выглядит он довольно просто:
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"try(FileOutputStream output = new FileOutputStream(path))\n" +
                    "{\n" +
                    "   output.write(1);\n" +
                    "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Для этого классы обязательно должны реализовывать интерфейс <Text code>AutoCloseable</Text>.
                </Paragraph>
            </Typography>)
    }
}