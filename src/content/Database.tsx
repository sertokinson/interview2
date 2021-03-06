import React from 'react';
import 'antd/dist/antd.css';
import {Typography, Table} from 'antd';

const {Paragraph, Title, Text} = Typography;

export default class Database extends React.Component {
    render() {
        return (
            <Typography>
                <Title>Нормализация</Title>
                <Title level={2}>Первая нормальная форма</Title>
                <Paragraph style={{fontSize: 20}}>
                    Не должно быть повторений строк в таблице. Например, есть таблица «Автомобили»:
                </Paragraph>
                <Table pagination={false}
                       dataSource={[
                           {
                               firme: 'BMW',
                               model: 'M5, X5M, M1'
                           },
                           {
                               firme: 'Nissan',
                               model: 'GT-R'
                           }
                       ]}
                       columns={[
                           {
                               title: 'Фирма',
                               dataIndex: 'firme'
                           },
                           {
                               title: 'Модели',
                               dataIndex: 'model'
                           }
                       ]}>
                </Table>
                <Paragraph style={{fontSize: 20}}>
                    Нарушение нормализации 1НФ происходит в моделях BMW, т.к. в одной ячейке содержится список из 3
                    элементов: M5, X5M, M1, т.е. он не является атомарным. Преобразуем таблицу к 1НФ:
                </Paragraph>
                <Table pagination={false}
                       dataSource={[
                           {
                               firme: 'BMW',
                               model: 'M5'
                           },
                           {
                               firme: 'BMW',
                               model: 'X5M'
                           },
                           {
                               firme: 'BMW',
                               model: 'M1'
                           },
                           {
                               firme: 'Nissan',
                               model: 'GT-R'
                           }
                       ]}
                       columns={[
                           {
                               title: 'Фирма',
                               dataIndex: 'firme'
                           },
                           {
                               title: 'Модели',
                               dataIndex: 'model'
                           }
                       ]}>
                </Table>
                <Title level={2}>Вторая нормальная форма</Title>
                <Table pagination={false}
                       dataSource={[
                           {
                               firme: 'BMW',
                               model: 'M5',
                               price: '5500000',
                               sale: '5%'
                           },
                           {
                               firme: 'BMW',
                               model: 'X5M',
                               price: '6000000',
                               sale: '5%'
                           },
                           {
                               firme: 'BMW',
                               model: 'M1',
                               price: '2500000',
                               sale: '5%'
                           },
                           {
                               firme: 'Nissan',
                               model: 'GT-R',
                               price: '5000000',
                               sale: '10%'
                           }
                       ]}
                       columns={[
                           {
                               title: 'Фирма',
                               dataIndex: 'firme'
                           },
                           {
                               title: 'Модели',
                               dataIndex: 'model'
                           },
                           {
                               title: 'Цена',
                               dataIndex: 'price'
                           },
                           {
                               title: 'Скидка',
                               dataIndex: 'sale'
                           },
                       ]}>
                </Table>
                <Paragraph style={{fontSize: 20}}>
                    Таблица находится в первой нормальной форме, но не во второй. Цена машины зависит от модели и фирмы.
                    Скидка зависят от фирмы, то есть зависимость от первичного ключа неполная. Исправляется это путем
                    декомпозиции на два отношения, в которых не ключевые атрибуты зависят от ПК.
                </Paragraph>
                <Table pagination={false}
                       dataSource={[
                           {
                               firme: 'BMW',
                               model: 'M5',
                               price: '5500000'
                           },
                           {
                               firme: 'BMW',
                               model: 'X5M',
                               price: '6000000'
                           },
                           {
                               firme: 'BMW',
                               model: 'M1',
                               price: '2500000'
                           },
                           {
                               firme: 'Nissan',
                               model: 'GT-R',
                               price: '5000000'
                           }
                       ]}
                       columns={[
                           {
                               title: 'Фирма',
                               dataIndex: 'firme'
                           },
                           {
                               title: 'Модели',
                               dataIndex: 'model'
                           },
                           {
                               title: 'Цена',
                               dataIndex: 'price'
                           }
                       ]}>
                </Table>
                <Table pagination={false}
                       style={{marginTop:20}}
                       dataSource={[
                           {
                               firme: 'BMW',
                               sale: '5%'
                           },
                           {
                               firme: 'Nissan',
                               sale: '10%'
                           }
                       ]}
                       columns={[
                           {
                               title: 'Фирма',
                               dataIndex: 'firme'
                           },
                           {
                               title: 'Скидка',
                               dataIndex: 'sale'
                           }
                       ]}>
                </Table>
                <Title level={2}>Третья нормальная форма</Title>
                <Table pagination={false}
                       dataSource={[
                           {
                               model: 'BMW',
                               shop: 'Риал-авто',
                               phone: '87-33-98'
                           },
                           {
                               model: 'Audi',
                               shop: 'Риал-авто',
                               phone: '87-33-98'
                           },
                           {
                               model: 'Nissan',
                               shop: 'Некст-авто',
                               phone: '94-54-12'
                           }
                       ]}
                       columns={[
                           {
                               title: 'Модели',
                               dataIndex: 'model'
                           },
                           {
                               title: 'Магазин',
                               dataIndex: 'shop'
                           },
                           {
                               title: 'Телефон',
                               dataIndex: 'phone'
                           }
                       ]}>
                </Table>
                <Paragraph style={{fontSize: 20}}>
                    Таблица находится во 2НФ, но не в 3НФ.
                    В отношении атрибут «Модель» является первичным ключом. Личных телефонов у автомобилей нет, и телефон зависит исключительно от магазина.
                    Таким образом, в отношении существуют следующие функциональные зависимости: Модель → Магазин, Магазин → Телефон, Модель → Телефон.
                    Зависимость Модель → Телефон является транзитивной, следовательно, отношение не находится в 3НФ.
                    В результате разделения исходного отношения получаются два отношения, находящиеся в 3НФ:
                </Paragraph>
                <Table pagination={false}
                       dataSource={[
                           {
                               shop: 'Риал-авто',
                               phone: '87-33-98'
                           },
                           {
                               shop: 'Риал-авто',
                               phone: '87-33-98'
                           },
                           {
                               shop: 'Некст-авто',
                               phone: '94-54-12'
                           }
                       ]}
                       columns={[
                           {
                               title: 'Магазин',
                               dataIndex: 'shop'
                           },
                           {
                               title: 'Телефон',
                               dataIndex: 'phone'
                           }
                       ]}>
                </Table>
                <Table pagination={false}
                       style={{marginTop:15}}
                       dataSource={[
                           {
                               model: 'BMW',
                               shop: 'Риал-авто'
                           },
                           {
                               model: 'Audi',
                               shop: 'Риал-авто'
                           },
                           {
                               model: 'Nissan',
                               shop: 'Некст-авто'
                           }
                       ]}
                       columns={[
                           {
                               title: 'Модели',
                               dataIndex: 'model'
                           },
                           {
                               title: 'Магазин',
                               dataIndex: 'shop'
                           }
                       ]}>
                </Table>
                <Title>Реляционная БД</Title>
                <Paragraph style={{fontSize: 20}}>
                    Реляционная база данных – это набор данных с предопределенными связями между ними. Эти данные организованны в виде набора таблиц, состоящих из столбцов и строк. В таблицах хранится информация об объектах, представленных в базе данных. В каждом столбце таблицы хранится определенный тип данных, в каждой ячейке – значение атрибута. Каждая стока таблицы представляет собой набор связанных значений, относящихся к одному объекту или сущности. Каждая строка в таблице может быть помечена уникальным идентификатором, называемым первичным ключом, а строки из нескольких таблиц могут быть связаны с помощью внешних ключей. К этим данным можно получить доступ многими способами, и при этом реорганизовывать таблицы БД не требуется.
                </Paragraph>
                <Title level={2}>SQL</Title>
                <Paragraph style={{fontSize: 20}}>
                    SQL (Structured Query Language) – основной интерфейс работы с реляционными базами данных. SQL используется для добавления, обновления и удаления строк данных, извлечения наборов данных для обработки транзакций и аналитических приложений, а также для управления всеми аспектами работы базы данных.
                </Paragraph>
                <Title level={2}>Целостность данных</Title>
                <Paragraph style={{fontSize: 20}}>
                    Целостность данных – это полнота, точность и единообразие данных. Для поддержания целостности данных в реляционных БД используется ряд инструментов. В их число входят первичные ключи, внешние ключи, ограничения «Not NULL», «Unique», «Default» и «Check». Эти ограничения целостности позволяют применять практические правила к данным в таблицах и гарантировать точность и надежность данных.
                </Paragraph>
                <Title level={2}>Транзакции</Title>
                <Paragraph style={{fontSize: 20}}>
                    Транзакция в базе данных – это один или несколько операторов SQL, выполненных в виде последовательности операций, представляющих собой единую логическую задачу. Транзакция представляет собой неделимое действие, то есть она должна быть выполнена как единое целое и либо должна быть записана в базу данных целиком, либо не должен быть записан ни один из ее компонентов. В терминологии реляционных баз данных транзакция завершается либо действием COMMIT, либо ROLLBACK. Каждая транзакция рассматривается как внутренне связный, надежный и независимый от других транзакций элемент.
                </Paragraph>
                <Title level={2}>Соответствие требованиям ACID</Title>
                <Paragraph style={{fontSize: 20}}>
                    Для соблюдения целостности данных все транзакции в БД должны соответствовать требованиям ACID, то есть быть атомарными, единообразными, изолированными и надежными.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <ul>
                        <li><Text strong>Атомарность(Atomicity)</Text> - это условие, при котором либо транзакция успешно выполняется целиком, либо, если какая-либо из ее частей не выполняется, вся транзакция отменяется.</li>
                        <li><Text strong>Согласованность(Consistency)</Text> - Согласованность является более широким понятием. Например, в банковской системе может существовать требование равенства суммы, списываемой с одного счёта, сумме, зачисляемой на другой. Это бизнес-правило и оно не может быть гарантировано только проверками целостности, его должны соблюсти программисты при написании кода транзакций. Если какая-либо транзакция произведёт списание, но не произведёт зачисления, то система останется в некорректном состоянии и свойство согласованности будет нарушено.</li>
                        <li><Text strong>Изолированность(Isolation)</Text> - Во время выполнения транзакции параллельные транзакции не должны оказывать влияния на её результат.</li>
                        <li><Text strong>Надежность(Durability)</Text> - Независимо от проблем на нижних уровнях (к примеру, обесточивание системы или сбои в оборудовании) изменения, сделанные успешно завершённой транзакцией, должны остаться сохранёнными после возвращения системы в работу. Другими словами, если пользователь получил подтверждение от системы, что транзакция выполнена, он может быть уверен, что сделанные им изменения не будут отменены из-за какого-либо сбоя.</li>
                    </ul>
                </Paragraph>
                <Title>Индексы БД</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text strong>Индекс (англ. index)</Text> — объект базы данных, создаваемый с целью повышения производительности поиска данных. Таблицы в базе данных могут иметь большое количество строк, которые хранятся в произвольном порядке, и их поиск по заданному критерию путём последовательного просмотра таблицы строка за строкой может занимать много времени. Индекс формируется из значений одного или нескольких столбцов таблицы и указателей на соответствующие строки таблицы и, таким образом, позволяет искать строки, удовлетворяющие критерию поиска. Ускорение работы с использованием индексов достигается в первую очередь за счёт того, что индекс имеет структуру, оптимизированную под поиск — например, сбалансированного дерева.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Хорошо использовать если много чтения из БД, плохо если много записи в БД, т.к. происходит переиндексация
                </Paragraph>
                <Title>Первичный ключ</Title>
                <Paragraph style={{fontSize: 20}}>
                    Primary Key (PK) - Это колонка с уникальными не null записями
                </Paragraph>
                <Title>Внешний ключ</Title>
                <Paragraph style={{fontSize: 20}}>
                    Foreign key (FK) - В качестве внешнего ключа выбирается первичный ключ связуемой таблицы
                </Paragraph>
                <Title>Репликация</Title>
                <Paragraph style={{fontSize: 20}}>
                    Репликация позволяет создать полный дубликат базы данных. Так, вместо одного сервера у Вас их будет несколько:
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Чаще всего используют схему master-slave:
                    <ul>
                        <li><Text strong>Master</Text> — это основной сервер БД, куда поступают все данные. Все изменения в данных (добавление, обновление, удаление) должны происходить на этом сервере.</li>
                        <li><Text strong>Slave</Text> - это вспомогательный сервер БД, который копирует все данные с мастера. С этого сервера следует читать данные. Таких серверов может быть несколько.</li>
                    </ul>
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Репликация позволяет использовать два или больше одинаковых серверов вместо одного. Операций чтения (SELECT) данных часто намного больше, чем операций изменения данных (INSERT/UPDATE). Поэтому, репликация позволяет разгрузить основной сервер за счет переноса операций чтения на слейв.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    Следует отметить, что репликация сама по себе не очень удобный механизм масштабирования. Причиной тому — рассинхронизация данных и задержки в копировании с мастера на слейв. Зато это отличное средство для обеспечения отказоустойчивости. Вы всегда можете переключиться на слейв, если мастер ломается и наоборот. Чаще всего репликация используется совместно с шардингом именно из соображений надежности.
                </Paragraph>
                <Title>Шардинг (sharding)</Title>
                <Paragraph style={{fontSize: 20}}>
                    Шардинг (иногда шардирование) — это другая техника масштабирования работы с данными. Суть его в разделении (партиционирование) базы данных на отдельные части так, чтобы каждую из них можно было вынести на отдельный сервер. Этот процесс зависит от структуры Вашей базы данных и выполняется прямо в приложении в отличие от репликации:
                </Paragraph>
                <Title level={2}>Вертикальная партиция</Title>
                <Paragraph style={{fontSize: 20}}>
                    Вертикальный шардинг — это выделение таблицы или группы таблиц на отдельный сервер
                </Paragraph>
                <Title level={2}>Горизонтальная партиция</Title>
                <Paragraph style={{fontSize: 20}}>
                    Горизонтальный шардинг — это разделение одной таблицы на разные сервера. Это необходимо использовать для огромных таблиц, которые не умещаются на одном сервере. Разделение таблицы на куски делается по такому принципу:
                    <ul>
                        <li>На нескольких серверах создается одна и та же таблица (только структура, без данных).</li>
                        <li>В приложении выбирается условие, по которому будет определяться нужное соединение (например, четные на один сервер, а нечетные — на другой).</li>
                        <li>Перед каждым обращением к таблице происходит выбор нужного соединения.</li>
                    </ul>
                    Допустим, наше приложение работает с огромной таблицей, которая хранит фотографии пользователей. Мы подготовили два сервера (обычно они называются шардами) для этой таблицы. Для нечетных пользователей мы будем работать с первыми сервером, а для четных — со вторым. Таким образом, на каждом из серверов будет только часть всех данных о фотках пользователей.
                </Paragraph>
            </Typography>)
    }
}