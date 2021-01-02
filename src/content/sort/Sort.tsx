import React from 'react';
import 'antd/dist/antd.css';
import {Typography, Image} from 'antd';
import SyntaxHighlighter from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import sorting from "./sorting.png";

const {Paragraph, Text, Title} = Typography;

export default class Sort extends React.Component {
    render() {
        return (
            <Typography>
                <Title>Сортировка пузырьком</Title>
                <Paragraph style={{fontSize: 20}}>
                    Алгоритм просматривает массив и сравнивает каждую пару соседних элементов. Когда он встречает пару элементов, расположенных не по порядку, происходит замена двух элементов местами.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Вот шаги для сортировки массива чисел от наименьшего к большему:
                    <ul>
                        <li><Text code>4 2 1 5 3</Text>: два первых элемента расположены в массиве в неверном порядке. Меняем их.</li>
                        <li><Text code>2 4 1 5 3</Text>: вторая пара элементов тоже «не в порядке». Меняем и их.</li>
                        <li><Text code>2 1 4 5 3</Text>: а эти два элемента в верном порядке {"(4 < 5)"}, поэтому оставляем как есть.</li>
                        <li><Text code>2 1 4 5 3</Text>: очередная замена.</li>
                        <li><Text code>2 1 4 3 5</Text>: результат после одной итерации.</li>
                    </ul>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Для полной сортировки нужен еще один шаг. Третья итерация пройдет уже без замены. Так вы поймете, что массив отсортирован.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Но причём тут пузырьки? Посмотрите снова на пример, и вы увидите, что алгоритм как бы смещается вправо. По этому поведению элементов в массиве и возникла аналогия с «пузырьками», всплывающими на «поверхность».
                </Paragraph>
                <Title level={2}>Реализация</Title>
                <Paragraph style={{fontSize: 20}}>
                    Функция входит в цикл <Text code>while</Text>, в котором проходит весь массив и меняет элементы местами при необходимости.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Массив в алгоритме считается отсортированным. При первой замене доказывается обратное и запускается еще одна итерация.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Цикл останавливается, когда все пары элементов в массиве пропускаются без замен:
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"public static void bubbleSort(int[] array) {  \n" +
                    "    boolean sorted = false;\n" +
                    "    int temp;\n" +
                    "    while(!sorted) {\n" +
                    "        sorted = true;\n" +
                    "        for (int i = 0; i < array.length - 1; i++) {\n" +
                    "            if (array[i] > array[i+1]) {\n" +
                    "                temp = array[i];\n" +
                    "                array[i] = array[i+1];\n" +
                    "                array[i+1] = temp;\n" +
                    "                sorted = false;\n" +
                    "            }\n" +
                    "        }\n" +
                    "    }\n" +
                    "}"}
                </SyntaxHighlighter>
                <Title level={2}>Временная сложность</Title>
                <Paragraph style={{fontSize: 20}}>
                    Рассмотрим наихудший сценарий. Вот в чем вопрос: сколько итераций нужно для сортировки всего массива? Пример:
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    5 4 3 2 1
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    При первой итерации 5 «всплывает на поверхность», при этом остальные элементы остаются в порядке убывания. Если вы хотите получить отсортированный массив, придется делать по одной итерации для каждого элемента, кроме 1, и еще одну итерацию для проверки, что в сумме составляет 5 итераций.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Расширьте это утверждение для массива из <Text code>n</Text> элементов, и получите n итераций. В коде это означает, что цикл <Text code>while</Text> будет запускаться максимум <Text code>n</Text> раз.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Каждая n-ая итерация по всему массиву (цикл <Text code>for</Text> в коде) означает, что временная сложность в наихудшем случае будет равна <Text code>O(n ^ 2)</Text>.
                </Paragraph>
                <Title>Сортировка вставками</Title>
                <Paragraph style={{fontSize: 20}}>
                    Этот алгоритм разделяет оригинальный массив на сортированный и несортированный подмассивы.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Длина сортированной части равна 1 в начале и соответствует первому (левому) элементу в массиве. После этого остается итерировать массив и расширять отсортированную часть массива одним элементом с каждой новой итерацией.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    После расширения новый элемент помещается на свое место в отсортированном подмассиве. Это происходит путём сдвига всех элементов вправо, пока не встретится элемент, который не нужно двигать.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li><Text code>3 5 7 8 4 2 1 9 6</Text>: останавливаемся на 4 и т.к. {"8 > 4"} то сдвигаем</li>
                        <li><Text code>3 5 7 x 8 2 1 9 6</Text>: x - это сравнение {"4 > 7"} сдвигаем</li>
                        <li><Text code>3 5 x 7 8 2 1 9 6</Text></li>
                        <li><Text code>3 x 5 7 8 2 1 9 6</Text></li>
                        <li><Text code>3 4 5 7 8 2 1 9 6</Text></li>
                    </ul>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Теперь вы видите, что отсортированная часть дополнилась элементом. Каждая следующая итерация делает то же самое, и к концу вы получите отсортированный массив!
                </Paragraph>
                <Title level={2}>Реализация</Title>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"public static void insertionSort(int[] array) {  \n" +
                    "    for (int i = 1; i < array.length; i++) {\n" +
                    "        int current = array[i];\n" +
                    "        int j = i - 1;\n" +
                    "        while(j >= 0 && current < array[j]) {\n" +
                    "            array[j+1] = array[j];\n" +
                    "            j--;\n" +
                    "        }\n" +
                    "         // в этой точке мы вышли, так что j так же -1 \n" +
                    "         // или в первом элементе, где текущий >= a[j]\n" +
                    "        array[j+1] = current;\n" +
                    "    }\n" +
                    "}"}
                </SyntaxHighlighter>
                <Title level={2}>Временная сложность</Title>
                <Paragraph style={{fontSize: 20}}>
                    Вернемся к худшему сценарию – к массиву, отсортированному в убывающем порядке.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    В этом случае каждая итерация сдвигает отсортированный массив на единицу <Text code>O(n)</Text>.
                    Придется делать это для каждого элемента в каждом массиве, что приведет к сложности равной <Text code>O(n ^ 2)</Text>.
                </Paragraph>
                <Title>Сортировка выбором</Title>
                <Paragraph style={{fontSize: 20}}>
                    Сортировка выбором тоже разделяет массив на сортированный и несортированный подмассивы. Но на этот раз сортированный подмассив формируется вставкой минимального элемента не отсортированного подмассива в конец сортированного, заменой:
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                <ul>
                    <li><Text code>3 5 1 2 4</Text></li>
                    <li><Text code>1 5 3 2 4</Text></li>
                    <li><Text code>1 2 3 5 4</Text></li>
                    <li><Text code>1 2 3 5 4</Text></li>
                    <li><Text code>1 2 3 4 5</Text></li>
                </ul>
                </Paragraph>
                <Title level={2}>Реализация</Title>
                <Paragraph style={{fontSize: 20}}>
                    В каждой итерации вы предполагаете, что первый неотсортированный элемент минимален и итерируете по всем оставшимся элементам в поисках меньшего.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    После нахождения текущего минимума неотсортированной части массива вы меняете его местами с первым элементом, и он уже часть отсортированного массива:
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {" for (int i = 0; i < array.length; i++) {\n" +
                    "        int min = array[i];\n" +
                    "        int minId = i;\n" +
                    "        for (int j = i+1; j < array.length; j++) {\n" +
                    "            if (array[j] < min) {\n" +
                    "                min = array[j];\n" +
                    "                minId = j;\n" +
                    "            }\n" +
                    "        }\n" +
                    "        // замена\n" +
                    "        int temp = array[i];\n" +
                    "        array[i] = min;\n" +
                    "        array[minId] = temp;\n" +
                    "    }\n" +
                    "}"}
                </SyntaxHighlighter>
                <Title level={2}>Временная сложность</Title>
                <Paragraph style={{fontSize: 20}}>
                    При поиске минимума для длины массива проверяются все элементы, поэтому сложность равна <Text code>O(n)</Text>.
                    Поиск минимума для каждого элемента массива равен <Text code>O(n^2)</Text>.
                </Paragraph>
                <Title>Сортировка слиянием</Title>
                <Paragraph style={{fontSize: 20}}>
                    Сортировка слиянием эффективнее, чем примеры алгоритмов сортировки, представленные выше, благодаря использованию рекурсии и подходу «разделяй и властвуй».
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text strong>Разделяй и властвуй</Text> — парадигма разработки алгоритмов, заключающаяся в рекурсивном разбиении решаемой задачи на две или более подзадачи того же типа, но меньшего размера, и комбинировании их решений для получения ответа к исходной задаче; разбиения выполняются до тех пор, пока все подзадачи не окажутся элементарными.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Массив делится на два подмассива, а затем происходит:
                    <ul>
                        <li>Сортировка левой половины массива (рекурсивно)</li>
                        <li>Сортировка правой половины массива (рекурсивно)</li>
                        <li>Слияние</li>
                    </ul>
                </Paragraph>
                <Image src={sorting} />
                <Paragraph style={{fontSize: 20}}>
                    На схеме показана работа рекурсивных вызовов. Для массивов, отмеченных стрелкой вниз, вызывается функция. Во время слияния возвращаются массивы со стрелкой вверх. Всё просто: мы следуем за стрелкой вниз к нижней части дерева, а затем возвращаемся и объединяем.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    В примере массив <Text code>3 5 4 2 1</Text> делится на <Text code>3 5 4</Text> и <Text code>2 1</Text> и так далее. При достижении «дна» начинается объединение и сортировка.
                </Paragraph>
                <Title level={2}>Реализация</Title>
                <Paragraph style={{fontSize: 20}}>
                    В главную функцию передаются <Text code>left</Text> и <Text code>right</Text> – индексы подмассивов для сортировки, крайние слева и справа. Изначально они имеют значения <Text code>0</Text> и <Text code>array.length-1</Text>, в зависимости от реализации.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Основа нашей рекурсии гарантирует, что мы выйдем, когда закончим, или когда <Text code>left</Text> и <Text code>right</Text> встретятся друг с другом.
                    Мы находим среднюю точку <Text code>mid</Text> и рекурсивно сортируем подмассивы слева и справа от середины, в итоге объединяя наши решения.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"public static void mergeSort(int[] array, int left, int right) {  \n" +
                    "    if (right <= left) return;\n" +
                    "    int mid = (left+right)/2;\n" +
                    "    mergeSort(array, left, mid);\n" +
                    "    mergeSort(array, mid+1, right);\n" +
                    "    merge(array, left, mid, right);\n" +
                    "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Для сортировки двух подмассивов в один нужно вычислить их длину и создать временные массивы, в которые будем копировать. Так можно свободно изменять главный массив.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    После копирования мы проходим по результирующему массиву и назначаем текущий минимум. Помните, что наши подмассивы отсортированы? Теперь нужно просто выбрать наименьший из двух элементов, которые еще не были выбраны, и двигать итератор для этого массива вперед:
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"void merge(int[] array, int left, int mid, int right) {\n" +
                    "    // вычисляем длину\n" +
                    "    int lengthLeft = mid - left + 1;\n" +
                    "    int lengthRight = right - mid;\n" +
                    "\n" +
                    "    // создаем временные подмассивы\n" +
                    "    int leftArray[] = new int [lengthLeft];\n" +
                    "    int rightArray[] = new int [lengthRight];\n" +
                    "\n" +
                    "    // копируем отсортированные массивы во временные\n" +
                    "    for (int i = 0; i < lengthLeft; i++)\n" +
                    "        leftArray[i] = array[left+i];\n" +
                    "    for (int i = 0; i < lengthRight; i++)\n" +
                    "        rightArray[i] = array[mid+i+1];\n"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Сложность <Text code>O(nlog n)</Text>
                </Paragraph>
                <Title>Быстрая сортировка</Title>
                <Paragraph style={{fontSize: 20}}>
                    На этом участнике нашего топа мы закончим разбирать примеры алгоритмов сортировки.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Перед вами очередной алгоритм техники «разделяй и властвуй». Он выбирает один элемент массива в качестве стержня и сортирует остальные элементы вокруг (меньшие элементы налево, большие направо).
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Так соблюдается правильная позиция самого «стержня». Затем алгоритм рекурсивно повторяет сортировку для правой и левой частей
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"static int partition(int[] array, int begin, int end) {  \n" +
                    "    int pivot = end;\n" +
                    "\n" +
                    "    int counter = begin;\n" +
                    "    for (int i = begin; i < end; i++) {\n" +
                    "        if (array[i] < array[pivot]) {\n" +
                    "            int temp = array[counter];\n" +
                    "            array[counter] = array[i];\n" +
                    "            array[i] = temp;\n" +
                    "            counter++;\n" +
                    "        }\n" +
                    "    }\n" +
                    "    int temp = array[pivot];\n" +
                    "    array[pivot] = array[counter];\n" +
                    "    array[counter] = temp;\n" +
                    "\n" +
                    "    return counter;\n" +
                    "}\n" +
                    "\n" +
                    "public static void quickSort(int[] array, int begin, int end) {  \n" +
                    "    if (end <= begin) return;\n" +
                    "    int pivot = partition(array, begin, end);\n" +
                    "    quickSort(array, begin, pivot-1);\n" +
                    "    quickSort(array, pivot+1, end);\n" +
                    "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Временная сложность: <Text code>O(n^2)</Text>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    На фоне алгоритмов сортировки со сложностью <Text code>O(nlog n)</Text>, выглядит не очень :(
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    На практике быстрая сортировка применяется широко. Судите сами: у алгоритма очень хорошее среднее время запуска, также равное <Text code>O(nlog n)</Text>, он эффективен для больших потоков ввода. И на этом преимущества не заканчиваются!
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Алгоритм не занимает дополнительного пространства, вся сортировка происходит «на месте», отсутствуют затратные вызовы распределения, из-за чего его часто предпочитают сортировке слиянием.
                </Paragraph>
            </Typography>)
    }
}