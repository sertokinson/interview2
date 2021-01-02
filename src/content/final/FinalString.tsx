import React from 'react';
import 'antd/dist/antd.css';
import {Typography, Image} from 'antd';
import stringPool from './String-Pool-Java1.png';
import table from './table.png';
import SyntaxHighlighter from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";

const {Paragraph, Text, Title} = Typography;

export default class FinalString extends React.Component {
    render() {
        return (
            <Typography>
                <Paragraph style={{fontSize: 20}}>
                    Для того чтобы сделать класс неизменяемым, необходимо выполнить следующие условия:
                    <ul>
                        <li>Не предоставляйте сеттеры или методы, которые изменяют поля или объекты, ссылающиеся на поля. Сеттеры подразумевают изменение состояния объекта а это то, чего мы хотим тут избежать.</li>
                        <li>Сделайте все поля final и private. Поля, обозначенные private, будут недоступными снаружи класса, а обозначение их final гарантирует, что вы не измените их даже случайно.</li>
                        <li>Не разрешайте субклассам переопределять методы. Самый простой способ это сделать – объявить класс как final. Финализированные классы в Java не могут быть переопределены.</li>
                    </ul>
                    По существу они поточно-ориентированы, поэтому вам не нужно синхронизировать доступ к ним через потоки.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Если мы хотем использовать неизменяемый массив внутри или ссылочные изменяемые типы, то лучше клонировать их
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"class ImmutableArrayHolder {\n" +
                    " \n" +
                    "  private final int[] theArray;\n" +
                    " \n" +
                    "  // Right way to write a constructor -- copy the array\n" +
                    "  public ImmutableArrayHolder(int[] anArray) {\n" +
                    "    this.theArray = (int[]) anArray.clone();\n" +
                    "  }\n" +
                    " \n" +
                    "  // Wrong way to write a constructor -- copy the reference\n" +
                    "  // The caller could change the array after the call to the constructor\n" +
                    "  public ImmutableArrayHolder(int[] anArray) {\n" +
                    "    this.theArray = anArray;\n" +
                    "  }\n" +
                    " \n" +
                    "  // Right way to write an accessor -- don't expose the array reference\n" +
                    "  public int getArrayLength() { return theArray.length }\n" +
                    "  public int getArray(int n)  { return theArray[n]; }\n" +
                    " \n" +
                    "  // Right way to write an accessor -- use clone()\n" +
                    "  public int[] getArray()       { return (int[]) theArray.clone(); }\n" +
                    " \n" +
                    "  // Wrong way to write an accessor -- expose the array reference\n" +
                    "  // A caller could get the array reference and then change the contents\n" +
                    "  public int[] getArray()       { return theArray }\n" +
                    "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Из неизменяемых объектов получаются лучшие ключи HashMap или HashSet. Некоторые изменяемые объекты изменяют значение hashcode() в зависимости от своего состояния
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                </Paragraph>
                    Обозначая метод класса модификатором final, мы имеем ввиду, что ни один производный класс не в состоянии переопределить этот метод, изменив его внутреннюю реализацию. Другими словами, речь идет о финальной версии метода.
                <Title>String</Title>
                <Paragraph style={{fontSize: 20}}>
                    Класс <Text code>String</Text> объявлен, как <Text code>final</Text>.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Из-за того, что строка не изменяется, она кэширует свой хэшкод и не вычисляет его каждый раз,
                    когда мы его вызываем, что делает строку очень быстрой как ключ для <Text code>hashmap</Text>.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>immutable</Text> делает экземпляры строк <Text
                    code>thread-safe</Text> (потокобезопасными)
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text strong>Пул строк (String Pool)</Text> — это множество строк в кучи (Java Heap Memory). Мы
                    знаем, что <Text code>String</Text> — особый класс,
                    с помощью которого мы можем создавать строковые объекты.
                    На диаграмме ниже мы видим как именно строковый пул расположен в памяти <Text code>Java Heap</Text>.
                    И как разные способы создания строк влияют на расположение их в памяти.
                </Paragraph>
                <Image src={stringPool}/>
                <Paragraph style={{fontSize: 20}}>
                    Сам строковый пул возможен только потому, что строки неизменные.
                    Также пул строк позволяет сохранить память в <Text code>Java Runtime</Text>, хотя это и требует
                    больше времени на создание самой строки.
                </Paragraph>
                <Title>Пример работы с пулом строк</Title>
                <Paragraph style={{fontSize: 20}}>
                    Когда мы используем двойные кавычки, чтобы создать новую строку, то первым
                    делом идет поиск строки с таким же значением в пуле строк. Если <Text code>java</Text> такую строку
                    нашла, то возвращает ссылку,
                    в противном случае создается новая строка в пуле, а затем возвращается ссылка.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Однако использование оператора <Text code>new</Text> заставляет класс <Text code>String</Text> создать новый
                    объект <Text code>String</Text>.
                    После этого можем использовать метод <Text code>intern()</Text>,
                    чтобы поместить этот объект в пул строк или обратиться к другому объекту из пула строк, который
                    имеет такое же значение.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Следует также отметить, что к абстрактным классам (с ключевым словом <Text code>abstarct</Text>,
                    нельзя применить модификатор <Text code>final</Text>, т.к.
                    это взаимоисключающие понятия. Для метода <Text code>final</Text> означает, что он не может быть
                    переопределен в подклассах.
                    Это полезно, когда мы хотим, чтобы исходную реализацию нельзя было переопределить.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Для переменных примитивного типа это означает, что однажды присвоенное значение не может быть
                    изменено.
                    Для ссылочных переменных это означает, что после присвоения объекта,
                    нельзя изменить ссылку на данный объект. <Text strong>Это важно! </Text> Ссылку изменить нельзя, но
                    состояние объекта изменять можно.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Т.к. массив – это объект, то <Text code>final</Text> означает, что после присвоения ссылки на
                    объект, уже нельзя ее изменить, но можно изменять состояние объекта.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"final int[] array = {1,2,3,4,5};\n" +
                    "array[0] = 9;\t//ок, т.к. изменяем содержимое массива – {9,2,3,4,5}\n" +
                    "array = new int[5]; //ошибка компиляции"}
                </SyntaxHighlighter>
                <Title>Все о String.intern()</Title>
                <Paragraph style={{fontSize: 20}}>
                    Ну, как вы, несомненно, знаете, существует два различных способа для сравнения объектов.
                    Вы можете использовать оператор <Text code>==</Text>, или же вы можете использовать метод <Text
                    code>equals()</Text>.
                    Оператор <Text code>==</Text> сравнивает ссылаются ли две ссылки на один и тот же объект, в то время
                    как <Text code>equals()</Text>
                    сравнивает содержат ли два объекта одни и те же данные.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Одним из первых уроков, который вы усваиваете при изучении <Text code>Java</Text> является то,
                    что обычно для сравнения двух строк вы должны использовать <Text code>equals()</Text>, а не <Text
                    code>==</Text>.
                    Если сравнить, скажем, <Text code>new String("Hello") == new String("Hello")</Text>,
                    то в результате получится <Text code>false</Text>, потому что это два разных экземпляра класса.
                    Если же вы используете <Text code>equals()</Text>, то получите true, как и ожидаете. К
                    сожалению, <Text code>equals()</Text>
                    может оказаться довольно медленным, поскольку он выполняет посимвольное сравнение строк.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Т.к. оператор <Text code>==</Text> проверяет идентичность (identity), все, что он должен сделать —
                    это сравнить два указателя,
                    и, очевидно, это будет гораздо быстрее, чем <Text code>equals()</Text>.
                    Так что если вы собираетесь сравнивать одни и те же строки многократно, вы можете получить
                    значительное преимущество в производительности за счет использования проверки идентичности объектов
                    вместо сравнения символов.
                </Paragraph>
                <Title level={2}>Основной алгоритм:</Title>
                <ul style={{fontSize: 20}}>
                    <li>Создать множество (hash set) строк</li>
                    <li>Проверить, что строка (как последовательность символов), с которой вы имеете дело, уже в
                        множестве
                    </li>
                    <li>Если да, то использовать строку из множества</li>
                    <li>В противном случае, добавить эту строку в множество и затем использовать ее</li>
                </ul>
                <Paragraph style={{fontSize: 20}}>
                    При использовании этого алгоритма гарантируется, что если две строки являются идентичными
                    последовательностями символов,
                    они являются одним экземпляром класса. Это означает, что вы можете спокойно сравнивать строки,
                    используя <Text code>==</Text> вместо <Text code>equals()</Text>,
                    получая при этом значительные преимущества производительности при многократно повторяющихся
                    сравнениях.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    К счастью <Text code>Java</Text> уже включает в себя реализацию этого алгоритма.
                    Это метод <Text code>intern()</Text> в классе <Text code>java.lang.String</Text>. Выражение <Text
                    code>new String("Hello").intern() == new String("Hello").intern()</Text>
                    возвращает <Text code>true</Text>, в то время как без использования <Text
                    code>intern()</Text> возвращается <Text code>false</Text>.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Таким образом, результатом вызова <Text code>intern()</Text> для строки-константы типа <Text
                    code>"version"</Text>, по определению, будет точно тот же объект, который вы объявили.
                    Другими словами <Text code>"version" == "version".intern()</Text> всегда истинно. Вам нужно
                    интернировать строки тогда, когда они не являются константами,
                    и вы хотите иметь возможность быстро сравнить их с другими интернированными строками.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Также при интернировании строк можно получить преимущество в использовании памяти, т.к. вы храните в
                    ней лишь один экземпляр последовательности символов строки, независимо от того, сколько раз вы на
                    эту последовательность ссылаетесь.
                    Это основная причина того, почему строковые константы файла класса интернированы: подумайте о том,
                    сколько классов ссылаются,
                    например, на <Text code>java.lang.Object</Text>. Имя класса <Text
                    code>java.lang.Object</Text> должно появиться в каждом из этих классов, но, благодаря магии <Text
                    code>intern()</Text>,
                    оно появляется в памяти лишь в одном экземпляре.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Вывод? <Text code>intern()</Text> является полезным методом и может сделать жизнь легче — но
                    убедитесь, что вы используете его должным образом.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Интернированные строки не хранятся вечно. Строки, на которых нет ссылок, также удаляются сборщиком
                    мусора.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    В большинстве случаев вы не получите существенного прироста производительности от
                    использования <Text code>intern()</Text> — если сравнение строк не является основной (или очень
                    частой) операцией вашего приложения
                </Paragraph>
                <Title>Concat vs +=</Title>
                <Paragraph style={{fontSize: 20}}>
                    Во-первых, есть небольшая разница в семантике. Если <Text code>a</Text> есть <Text code>null</Text>,
                    то <Text code>a.concat(b)</Text> бросает
                    <Text code>NullPointerException</Text> но <Text code>a+=b</Text> будет обрабатывать исходное
                    значение <Text code>a</Text> как если бы это было <Text code>null</Text>.
                    Кроме того, <Text code>concat()</Text> метод принимает только <Text code>String</Text> значения, в
                    то время как <Text code>+</Text>
                    оператор автоматически преобразует аргумент в строку (используя <Text code>toString()</Text> метод
                    для объектов).
                    Таким образом, <Text code>concat()</Text> метод более строг в том, что он принимает.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Под капотом конкатенация строк выполняется классом <Text code>StringBuilder</Text> либо <Text
                    code>StringBuffer</Text> (на усмотрение компилятора) и методом <Text code>append</Text>
                    (об этих классах поговорим чуть позже).
                    Если мы будем складывать экземпляры класса <Text code>String</Text> с экземплярами других классов,
                    последние будут приводиться к строковому представлению:
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"public static void main(String[] args) {\n" +
                    "    Boolean b = Boolean.TRUE;\n" +
                    "    String result = \"b is \" + b;\n" +
                    "    System.out.println(result); //b is true\n" +
                    "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Это еще одно интересное свойство класса <Text code>String</Text>: объекты любых классов можно
                    привести к строковому представлению,
                    используя метод <Text code>toString()</Text>, определенный в классе <Text code>Object</Text> и
                    наследуемый всеми остальными классами.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Часто метод <Text code>toString()</Text> у объекта вызывается неявно. Например когда мы выводим
                    что-то на экран или складываем
                    <Text code>String</Text> с объектом другого класса.
                </Paragraph>
                <Title level={2}>Недостатки</Title>
                <Paragraph style={{fontSize: 20}}>
                    Нетрудно догадаться, что класс <Text code>String</Text> нужен в первую очередь для работы со
                    строками.
                    Но в некоторых случаях перечисленные выше особенности класса <Text code>String</Text> могут
                    превратиться из достоинств в недостатки.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    После создания строк в коде с ними часто совершается множество операций:
                    <ul>
                        <li>перевод строк в разные регистры;</li>
                        <li>извлечение подстрок;</li>
                        <li>конкатенация;</li>
                    </ul>
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"public static void main(String[] args) {\n" +
                    "\n" +
                    "    String s = \" Wake up, Neo! \";\n" +
                    "    s = s.toUpperCase();\n" +
                    "    s = s.trim();\n" +
                    "\n" +
                    "    System.out.println(\"\\\"\" + s + \"\\\"\");\n"+
                        "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    С первого взгляда кажется, что мы всего-то перевели строку <Text code>"Wake up, Neo!"</Text> в верхний регистр,
                    удалили из данной строки лишние пробелы и обернули в кавычки.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    На самом деле, в силу неизменности класса <Text code>String</Text>, в результате каждой операции создаются новые экземпляры строк,
                    а старые отбрасываются, порождая большое количество мусора.
                </Paragraph>
                <Title>Класс StringBuffer</Title>
                <Paragraph style={{fontSize: 20}}>
                    Чтобы справиться с созданием временного мусора из-за модификаций объекта <Text code>String</Text>, можно использовать класс <Text code>StringBuffer</Text>.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Это <Text code>mutable</Text> класс, т.е. изменяемый. Объект класса <Text code>StringBuffer</Text>
                    может содержать в себе определенный набор символов, длину и значение которого можно изменить через вызов определенных методов.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li><Text code>StringBuffer()</Text> — создаст пустой (не содержащий символов) объект</li>
                        <li>
                            <Text code>StringBuffer(String str)</Text> — создаст объект на основе переменной str (содержащий все символы str в той же последовательности)
                        </li>
                    </ul>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Конкатенация строк через <Text code>StringBuffer</Text> в <Text code>Java</Text> выполняется с помощью метода <Text code>append</Text>.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Вообще метод <Text code>append</Text> в классе <Text code>StringBuffer</Text> перегружен таким образом, что может принимать в себя практически любой тип данных
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li><Text code>delete(int start, int end)</Text> — удаляет подстроку символов начиная с позиции <Text code>start</Text>, заканчивая <Text code>end</Text></li>
                        <li><Text code>deleteCharAt(int index)</Text> — удаляет символ в позиции <Text code>index</Text></li>
                        <li><Text code>insert(int offset, String str)</Text> — вставляет строку <Text code>str</Text> в позицию <Text code>offset</Text>. Метод <Text code>insert</Text> также перегружен и может принимать различные аргументы</li>
                        <li><Text code>replace(int start, int end, String str)</Text> — заменит все символы начиная с позиции <Text code>start</Text> до позиции <Text code>end</Text> на <Text code>str</Text></li>
                        <li><Text code>reverse()</Text> — меняет порядок всех символов на противоположный</li>
                        <li><Text code>substring(int start)</Text> — вернет подстроку, начиная с позиции <Text code>start</Text></li>
                        <li><Text code>substring(int start, int end)</Text> — вернет подстроку, начиная с позиции <Text code>start</Text> до позиции <Text code>end</Text></li>
                    </ul>
                </Paragraph>
                <Title level={2}>Преимущества</Title>
                <Paragraph style={{fontSize: 20}}>
                    Как уже сказано, <Text code>StringBuffer</Text> — изменяемый класс, поэтому при работе с ним не возникает такого же количества мусора в памяти, как со
                    <Text code>String</Text>. Поэтому если над строками проводится много модификаций, лучше использовать <Text code>StringBuffer</Text>.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>StringBuffer</Text> — потокобезопасный класс. Его методы синхронизированы, а экземпляры могут быть использованы несколькими потоками одновременно.
                </Paragraph>
                <Title level={2}>Недостатки</Title>
                <Paragraph style={{fontSize: 20}}>
                    С одной стороны, потокобезопасность — преимущество класса, а другой — недостаток.
                    Синхронизированные методы работают медленнее не сихнронизированных.
                </Paragraph>
                <Title>Класс StringBuilder</Title>
                <Paragraph style={{fontSize: 20}}>
                    Разница лишь в том, что <Text code>StringBuffer</Text> потокобезопасен, и все его методы синхронизированы, а <Text code>StringBuilder</Text> — нет. Это единственная особенность.
                </Paragraph>
                <Image src={table}/>
            </Typography>)
    }
}