import React from 'react';
import 'antd/dist/antd.css';
import {Image, Typography} from 'antd';
import collection from './Collections.png';
import collections from './collection.png';
import linkedHashMap1 from './linkedHashMap-1.png';
import linkedHashMap2 from './linkedHashMap-2.png';
import SyntaxHighlighter from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";

const {Paragraph, Text, Title} = Typography;

export default class Collection extends React.Component {
    render() {
        return (
            <Typography>
                <Title>Коллекции</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text strong>Коллекциями/контейнерами</Text> принято называть классы, основная цель которых – хранить набор других элементов.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Массивы обладают значительными недостатками.
                    Одним из них является конечный размер массива, как следствие, необходимость следить за размером массива.
                    Коллекции служат для избавления программиста от необходимости самостоятельно реализовывать эти типы данных и снабжает его дополнительными возможностями.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Коллекции могут хранить любые ссылочные типы данных
                </Paragraph>
                <Image src={collection}/>
                <Paragraph style={{fontSize: 20}}>
                    Здесь следует обратить внимание, что <Text code>interface Map</Text>  не входит в иерархию <Text code>interface Collection</Text>
                </Paragraph>
                <Title level={2}>List</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>List</Text> — это упорядоченный список. Объекты хранятся в порядке их добавления в список. Доступ к элементам списка осуществляется по индексу.
                </Paragraph>
                <Title level={3}>ArrayList</Title>
                <Paragraph style={{fontSize: 20}}>
                    реализован внутри в виде обычного массива.
                    Поэтому при вставке элемента в середину, приходится сначала сдвигать на один все элементы после него, а уже затем в освободившееся место вставлять новый элемент.
                    Зато в нем быстро реализованы взятие и изменение элемента – операции <Text code>get</Text>, <Text code>set</Text>, так как в них мы просто обращаемся к соответствующему элементу массива <Text code>O(1)</Text>.
                </Paragraph>
                <Title level={3}>LinkedList</Title>
                <Paragraph style={{fontSize: 20}}>
                    реализован в виде связного списка: набора отдельных элементов, каждый из которых хранит ссылку на следующий и предыдущий элементы.
                    Чтобы вставить элемент в середину такого списка, достаточно поменять ссылки его будущих соседей. А вот чтобы получить элемент с номером 130, нужно пройтись последовательно по всем объектам от 0 до 130. Другими словами операции <Text code>set</Text> и <Text code>get</Text> тут реализованы очень медленно <Text code>O(n)</Text>, а из начала и конца за константное <Text code>O(1)</Text>, потому что есть ссылка на <Text code>head</Text> и <Text code>tail</Text>.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Если необходимо вставлять (или удалять) в середину коллекции много элементов,
                    то лучше использовать <Text code>LinkedList</Text>. Во всех остальных случаях – <Text code>ArrayList</Text>.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>LinkedList</Text> требует больше памяти для хранения такого же количества элементов, потому что кроме самого элемента хранятся еще указатели на следующий и предыдущий элементы списка,
                    тогда как в <Text code>ArrayList</Text> элементы просто идут по порядку
                </Paragraph>
                <Title level={3}>Vector</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>Vector</Text> deprecated. У <Text code>Vector</Text> некоторые методы синхронизированы и поэтому они медленные. В любом случае <Text code>Vector</Text> не рекомендуется использовать вообще.
                </Paragraph>
                <Title level={2}>Set</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>Set</Text> — множество неповторяющихся объектов. В коллекции этого типа разрешено наличие только одной ссылки типа <Text code>null</Text>.
                </Paragraph>
                <Title level={3}>SortedSet (interface)</Title>
                <Paragraph style={{fontSize: 20}}>
                    Реализации этого интерфейса, помимо того что следят за уникальностью хранимых объектов, поддерживают их в порядке возрастания.
                    Отношение порядка между объектами может быть определено, как с помощью метода <Text code>compareTo</Text> интерфейса <Text code>java.lang.Comparable</Text>,
                    так и при помощи специального класса-компаратора, наследующего интерфейс <Text code>java.util.Comparator</Text>.
                </Paragraph>
                <Title level={4}>NavigableSet (interface)</Title>
                <Paragraph style={{fontSize: 20}}>
                    Интерфейс унаследован от SortedSet и расширяет методы навигации находя ближайшее совпадение по заданному значению. И сродни родительскому интерфейсу в NavigableSet не может быть дубликатов.
                    <ul>
                        <li><Text code>lower()</Text> – возвращает наибольший элемент в наборе, но строго меньше чём заданный если такого элемента нет, то в результате будет возвращено null. </li>
                        <li><Text code>floor()</Text> – возвращает наибольший элемент в наборе, но меньше чём заданный или равный ему, в случае отсутствия такого элемента будет возвращено null.</li>
                        <li><Text code>ceiling()</Text> – возвращает ближайший элемент в наборе, но который больше или равняется заданному, в случае отсутствия такого элемента будет возвращено null.</li>
                        <li><Text code>higher()</Text> – возвращает ближайший элемент в наборе, но строго больше чём заданный, в случае отсутствия такого элемента будет возвращено null.</li>
                    </ul>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Для доступа ко всем элементам набора поочередно в NavigableSet используется встроенный итератор, вывод может быть осуществлен как в порядке возрастания, так и спадания с помощью методов iterator() и descendingIterator()
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Метод pollFirst() –получает и удаляет из сета первый наименьший элемент(), или возвращает null в случае если сет пустой
                </Paragraph>
                <Title level={3}>TreeSet</Title>
                <Paragraph style={{fontSize: 20}}>
                    коллекция, которая хранит свои элементы в виде упорядоченного по значениям дерева.
                    <Text code>TreeSet</Text> инкапсулирует в себе <Text code>TreeMap</Text>, который в свою очередь использует сбалансированное
                    бинарное красно-черное дерево для хранения элементов. <Text code>TreeSet</Text> хорош тем, что для операций <Text code>add</Text>, <Text code>remove</Text> и <Text code>contains</Text> потребуется гарантированное время <Text code>log(n)</Text>.
                </Paragraph>
                <Title level={3}>HashSet</Title>
                <Paragraph style={{fontSize: 20}}>
                    Внутри использует объект <Text code>HashMap</Text> для хранения данных. В качестве ключа используется добавляемый элемент, а в качестве значения — объект-пустышка (new Object()). Из-за особенностей реализации порядок элементов не гарантируется при добавлении.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>HashSet</Text> гораздо быстрее чем <Text code>TreeSet</Text> (константное время против логарифмического для большинства операций, таких как <Text code>add</Text>, <Text code>remove</Text>, <Text code>contains</Text>, <Text code>size</Text>), но <Text code>TreeSet</Text> гарантирует упорядоченность объектов. Оба не синхронизированы.
                </Paragraph>
                <Title level={3}>LinkedHashSet</Title>
                <Paragraph style={{fontSize: 20}}>
                    отличается от <Text code>HashSet</Text> только тем, что в основе лежит <Text code>LinkedHashMap</Text> вместо <Text code>HashMap</Text>. Благодаря этому отличию порядок элементов при обходе коллекции является идентичным порядку добавления элементов
                </Paragraph>
                <Title level={2}>Queue</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>Queue</Text> — коллекция, предназначенная для хранения элементов в порядке, нужном для их обработки.
                    В дополнение к базовым операциям интерфейса <Text code>Collection</Text>, очередь предоставляет дополнительные операции вставки, получения и контроля.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Очереди обычно, но не обязательно, упорядочивают элементы в <Text code>FIFO</Text> (first-in-first-out, «первым вошел — первым вышел») порядке.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Метод <Text code>offer()</Text> вставляет элемент в очередь, если это не удалось — возвращает <Text code>false</Text>. Этот метод отличается от метода <Text code>add()</Text> интерфейса <Text code>Collection</Text> тем,
                    что метод <Text code>add()</Text> может неудачно добавить элемент только с использованием <Text code>unchecked</Text> исключения.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Методы <Text code>remove()</Text> и <Text code>poll()</Text> удаляют верхушку очереди и возвращают ее.
                    Какой элемент будет удален (первый или последний) зависит от реализации очереди. Методы <Text code>remove()</Text> и <Text code>poll()</Text>
                    отличаются лишь поведением, когда очередь пустая: метод <Text code>remove()</Text> генерирует исключение, а метод <Text code>poll()</Text> возвращает <Text code>null</Text>.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Методы <Text code>element()</Text> и <Text code>peek()</Text> возвращают (но не удаляют) верхушку очереди.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>java.util.Deque</Text> наследует <Text code>java.util.Queue</Text>. Двунаправленная очередь. Позволяет добавлять и удалять объекты с двух концов. Так же может быть использован в качестве стека.
                </Paragraph>
                <Title level={2}>Map</Title>
                <Paragraph style={{fontSize: 20}}>
                    Интерфейс <Text code>{"java.util.Map<K,V>"}</Text>  используется для отображения каждого элемента из одного множества объектов (ключей) на другое (значений).
                    При этом, каждому элементу из множества ключей ставится в соответствие множество значений. В то же время одному элементу из множества значений может соответствовать 1, 2 и более элементов из множества ключей.
                </Paragraph>
                <Title level={3}>SortedMap (interface)</Title>
                <Paragraph style={{fontSize: 20}}>
                    Реализации этого интерфейса обеспечивают хранение элементов множества ключей в порядке возрастания
                </Paragraph>
                <Title level={4}>NavigableMap (interface)</Title>
                <Paragraph style={{fontSize: 20}}>
                    Интерфейс NavigableMap расширяет интерфейс SortedMap и обеспечивает возможность получения элементов отображения относительно других элементов.
                </Paragraph>
                <Title level={3}>HashMap и TreeMap</Title>
                <Paragraph style={{fontSize: 20}}>
                    Внутри <Text code>HashMap</Text> содержит массив узлов, а узел представлен как класс, содержащий 4 поля:
                    <ul>
                        <li><Text code>int hash</Text></li>
                        <li><Text code>K key</Text></li>
                        <li><Text code>V value</Text></li>
                        <li><Text code>Node next</Text></li>
                    </ul>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>Bucket</Text> (ведро, корзина) - это единственный элемент массива <Text code>HashMap</Text>. Он используется для хранения узлов (Nodes). Два или более узла могут иметь один и тот -же bucket. В этом случае для связи узлов используется структура данных связанный список.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    т.к. если хеш-коды у объектов равны это не всегда означает что сами объекты равны (коллизия) то объект положится в ту же корзину и будет связан списком
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    У <Text code>HashMap</Text> время доступа к отдельному элементу — <Text code>O(1)</Text> при условии, что хэш-функция (Object.hashCode()) определена нормально (что является правдой в случае <Text code>Integer</Text>).
                </Paragraph>
                <Title level={4}>Изменения в Java 8</Title>
                <Paragraph style={{fontSize: 20}}>
                    Как мы уже знаем в случае возникновения коллизий объект <Text code>node</Text> сохраняется в структуре данных "связанный список" и метод <Text code>equals()</Text> используется для сравнения ключей.
                    Это сравнения для поиска верного ключа в связанном списке -линейная операция и в худшем случае сложность равнa <Text code>O(n)</Text>.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Для исправления этой проблемы в <Text code>Java 8</Text> после достижения определенного порога вместо связанных списков используются сбалансированные деревья.
                    Это означает, что <Text code>HashMap</Text> в начале сохраняет объекты в связанном списке, но после того, как колличество элементов в хэше достигает определенного порога происходит переход к сбалансированным деревьям.
                    Что улучшает производительность в худшем случае с <Text code>O(n)</Text> до <Text code>O(log n)</Text>.
                </Paragraph>
                <Title level={4}>Коэффициент нагрузки (loadFactor)</Title>
                <Paragraph style={{fontSize: 20}}>
                    Коэффициент загрузки - это мера, которая решает, когда увеличивать емкость <Text code>HashMap</Text>, чтобы поддерживать сложность операций <Text code>get()</Text> и <Text code>put()</Text> на уровне <Text code>O(1)</Text>.
                    Коэффициент загрузки <Text code>HashMap</Text> по умолчанию составляет <Text code>0,75f</Text> (75% от размера карты).
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Проблема в том, что, сохраняя фиксированный размер корзины (например, 16), мы продолжаем увеличивать общее количество элементов на карте, что нарушает временную сложность.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Когда мы увеличиваем общее количество корзин, общее количество элементов в каждой корзине начинает увеличиваться. Теперь мы можем поддерживать постоянное количество элементов в каждой корзине и поддерживать временную сложность <Text code>O(1)</Text> для операций <Text code>get()</Text> и put ().
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Мы можем найти, когда увеличить размер хэш-карты, используя следующую формулу:
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>начальная емкость хэш-карты * Коэффициент загрузки хэш-карты.</Text>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li>Начальная емкость хэш-карты = 16</li>
                        <li>Коэффициент загрузки хэш-карты по умолчанию = 0,75</li>
                        <li>Согласно формуле, как указано выше: 16 * 0,75 = 12</li>
                    </ul>
                    Это означает что после того как вставят 12 элемент размер будет увеличен до 32 и т. д. и произойдет повторное хеширование
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    При повторном хэшировании может использоваться новая функция <Text code>hash</Text> или даже та же самая функция <Text code>hash</Text>, но могут изменяться сегменты, в которых присутствуют значения и, следовательно, изменяется новый индекс, при котором должно быть введено значение.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    При повторном хэшировании связанный список для каждого ведра изменяется в обратном порядке. Это происходит потому, что HashMap не добавляет новый элемент в хвосте, вместо этого он добавляет новый элемент в голове. Поэтому, когда происходит повторное отображение, он считывает каждый элемент и вставляет его в новую корзину в начале, а затем продолжает добавлять следующие элементы из старой карты в начале новой карты, что приводит к реверсированию связанного списка.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Как сказано, HashMap не синхронизирован, т.е. несколько потоков могут обращаться к нему одновременно. Если несколько потоков обращаются к этому классу одновременно, и хотя бы один поток управляет им структурно, необходимо сделать его синхронизированным <Text code>Collections.synchronizedMap()</Text>
                </Paragraph>
                <Title level={3}>TreeMap</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>TreeMap</Text> предлагает поиск и вставку <Text code>O(log N)</Text>.
                    Ключи упорядочены, поэтому, если вам нужно перебрать ключи в отсортированном порядке, вы можете.
                    Это означает, что ключи должны реализовывать интерфейс <Text code>Comparable</Text>. <Text code>TreeMap</Text> реализован в виде красно-черного дерева.
                </Paragraph>
                <Title level={3}>LinkedHashMap</Title>
                <Paragraph style={{fontSize: 20}}>
                    Ключи отсортированы по порядку вставки. Реализуется двусвязными бакетами.
                </Paragraph>
                <Title level={4}>Добавление элементов</Title>
                <Paragraph style={{fontSize: 20}}>
                    <SyntaxHighlighter language="java" style={darcula}>
                        {"linkedHashMap.put(1, \"obj1\");"}
                    </SyntaxHighlighter>
                </Paragraph>
                <Image src={linkedHashMap1} />
                <Paragraph style={{fontSize: 20}}>
                    <SyntaxHighlighter language="java" style={darcula}>
                        {"linkedHashMap.put(15, \"obj15\");"}
                    </SyntaxHighlighter>
                </Paragraph>
                <Image src={linkedHashMap2} />
                <Paragraph style={{fontSize: 20}}>
                    Но это преимущество имеет также и недостаток — увеличение памяти, которое занимет коллекция
                </Paragraph>
                <Title level={3}>Hashtable</Title>
                <Paragraph style={{fontSize: 20}}>
                    Некоторые методы <Text code>HashTable</Text> синхронизированы, поэтому она медленнее <Text code>HashMap</Text>.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>HashTable</Text> не позволяет иметь <Text code>null</Text> ключи или значения. <Text code>HashMap</Text> позволяет иметь один <Text code>null</Text> ключ и сколько угодно <Text code>null</Text> значений.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Общее замечание — не рекомендуется использовать <Text code>HashTable</Text> даже в многопоточных приложениях. Для этого есть <Text code>ConcurrentHashMap</Text>.
                </Paragraph>
                <Title>Iterator Iterable</Title>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"public interface Iterable<T>\n" +
                    "{\n" +
                    "    Iterator<T> iterator();\n" +
                    "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Итератор — объект, позволяющий перебирать элементы коллекции. Например <Text code>foreach</Text> реализован с использованием итератора. Одним из ключевых методов интерфейса <Text code>Collection</Text> является метод <Text code>Iterator.iterator()</Text>.
                    Он возвращает итератор — то есть объект, реализующий интерфейс <Text code>Iterator</Text>.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"public interface Iterator <E>{\n" +
                    "    E next();\n" +
                    "    boolean hasNext();\n" +
                    "    void remove();\n" +
                    "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Итератор похож на указатель своими основными операциями: он указывает на отдельный элемент коллекции объектов (предоставляет доступ к элементу) и содержит функции для перехода к другому элементу списка (следующему или предыдущему).
                    Контейнер, который реализует поддержку итераторов, должен предоставлять первый элемент списка, а также возможность проверить, перебраны ли все элементы контейнера (является ли итератор конечным).
                </Paragraph>
                <Title>класс Collections</Title>
                <Image width={800} src={collections}/>
                <Title>Enumeration</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>Enumeration</Text> в два раза быстрее <Text code>Iterator</Text> и использует меньше памяти.
                    <Text code>Iterator</Text> потокобезопасен, т.к. не позволяет другим потокам модифицировать коллекцию при переборе.
                    <Text code>Enumeration</Text> можно использовать только для <Text code>read-only</Text> коллекций. Так же у него отсутствует метод <Text code>remove();</Text>
                </Paragraph>
                <Title>Comparable и Comparator</Title>
                <Paragraph style={{fontSize: 20}}>
                    Интерфейс <Text code>Comparable</Text>помогает сохранять естественную сортировку, тогда как <Text code>Comparator</Text> позволяет сортировать элементы по разным особым шаблонам.
                </Paragraph>
            </Typography>)
    }
}