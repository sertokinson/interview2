import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';
import SyntaxHighlighter from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";

const {Paragraph, Text, Title} = Typography;

export default class Search extends React.Component {
    render() {
        return (
            <Typography>
                <Title>Линейный поиск</Title>
                <Paragraph style={{fontSize: 20}}>
                    Линейный или последовательный поиск – простейший алгоритм поиска. Он редко используется из-за своей неэффективности. По сути, это метод полного перебора, и он уступает другим алгоритмам.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    При нахождении элемента возвращается его позиция в структуре данных. Если элемент не найден, возвращаем -1.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"public static int linearSearch(int arr[], int elementToSearch) {\n" +
                    "\n" +
                    "    for (int index = 0; index < arr.length; index++) {\n" +
                    "        if (arr[index] == elementToSearch)\n" +
                    "            return index;\n" +
                    "    }\n" +
                    "    return -1;\n" +
                    "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Для получения позиции искомого элемента перебирается набор из N элементов. В худшем сценарии для этого алгоритма искомый элемент оказывается последним в массиве.
                    Следовательно, временная сложность линейного поиска равна <Text code>O(N)</Text>.
                </Paragraph>
                <Title>Двоичный поиск</Title>
                <Paragraph style={{fontSize: 20}}>
                    Этот вид поиска использует подход «Разделяй и властвуй», требует предварительной сортировки набора данных.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Алгоритм делит входную коллекцию на равные половины, и с каждой итерацией сравнивает целевой элемент с элементом в середине. Поиск заканчивается при нахождении элемента. Иначе продолжаем искать элемент, разделяя и выбирая соответствующий раздел массива. Целевой элемент сравнивается со средним.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Поиск заканчивается, когда firstIndex (указатель) достигает lastIndex (последнего элемента). Значит мы проверили весь массив Java и не нашли элемента.
                </Paragraph>
                <SyntaxHighlighter language="java" style={darcula}>
                    {"public static int recursiveBinarySearch(int arr[], int firstElement, int lastElement, int elementToSearch) {\n" +
                    "\n" +
                    "    // условие прекращения\n" +
                    "    if (lastElement >= firstElement) {\n" +
                    "        int mid = firstElement + (lastElement - firstElement) / 2;\n" +
                    "\n" +
                    "        // если средний элемент - целевой элемент, вернуть его индекс\n" +
                    "        if (arr[mid] == elementToSearch)\n" +
                    "            return mid;\n" +
                    "\n" +
                    "        // если средний элемент больше целевого\n" +
                    "        // вызываем метод рекурсивно по суженным данным\n" +
                    "        if (arr[mid] > elementToSearch)\n" +
                    "            return recursiveBinarySearch(arr, firstElement, mid - 1, elementToSearch);\n" +
                    "\n" +
                    "        // также, вызываем метод рекурсивно по суженным данным\n" +
                    "        return recursiveBinarySearch(arr, mid + 1, lastElement, elementToSearch);\n" +
                    "    }\n" +
                    "\n" +
                    "    return -1;\n" +
                    "}"}
                </SyntaxHighlighter>
                <Paragraph style={{fontSize: 20}}>
                    Временная сложность алгоритма двоичного поиска равна <Text code>O(log (N))</Text> из-за деления массива пополам. Она превосходит O(N) линейного алгоритма.
                </Paragraph>
            </Typography>)
    }
}