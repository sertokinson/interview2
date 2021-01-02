import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';

const {Paragraph, Title, Text} = Typography;

export default class Concurrent extends React.Component {
    render() {
        return (
            <Typography>
                <Paragraph style={{fontSize: 20}}>
                    <Text strong>Concurrent Collections</Text> — набор коллекций, более эффективно работающие в многопоточной среде нежели стандартные универсальные коллекции из <Text code>java.util</Text> пакета.
                    Вместо базового враппера <Text code>Collections.synchronizedList</Text> с блокированием доступа ко всей коллекции используются блокировки по сегментам данных или же оптимизируется работа для параллельного чтения данных по wait-free (неблокирующая синхронизация) алгоритмам.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text strong>Queues</Text> — неблокирующие и блокирующие очереди с поддержкой многопоточности. Неблокирующие очереди заточены на скорость и работу без блокирования потоков.
                    Блокирующие очереди используются, когда нужно «притормозить» потоки «Producer» или «Consumer», если не выполнены какие-либо условия, например, очередь пуста или перепонена, или же нет свободного «Consumer»'a.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text strong>Synchronizers</Text> — вспомогательные утилиты для синхронизации потоков. Представляют собой мощное оружие в «параллельных» вычислениях.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text strong>Executors</Text> — содержит в себе отличные фрейморки для создания пулов потоков, планирования работы асинхронных задач с получением результатов.</Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text strong>Locks</Text> — представляет собой альтернативные и более гибкие механизмы синхронизации потоков по сравнению с базовыми synchronized, wait, notify, notifyAll.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text strong>Atomics</Text> — классы с поддержкой атомарных операций над примитивами и ссылками.
                </Paragraph>
                <Title>Concurrent Collections</Title>
                <Paragraph style={{fontSize: 20}}>
                    CopyOnWrite коллекции. Все операции по изменению коллекции (add, set, remove) приводят к созданию новой копии внутреннего массива. Тем самым гарантируется, что при проходе итератором по коллекции не кинется ConcurrentModificationException. Следует помнить, что при копировании массива копируются только референсы (ссылки) на объекты (shallow copy), т.ч. доступ к полям элементов не thread-safe. CopyOnWrite коллекции удобно использовать, когда write операции довольно редки, например при реализации механизма подписки listeners и прохода по ним.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"ConcurrentHashMap<K, V>"}</Text> — В отличие от Hashtable и блоков synhronized на HashMap, данные представлены в виде сегментов, разбитых по hash'ам ключей. В результате, для доступ к данным лочится по сегментам, а не по одному объекту. В дополнение, итераторы представляют данные на определенный срез времени и не кидают ConcurrentModificationException.
                </Paragraph>
                <Title>Queues</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"ConcurrentLinkedQueue<E>"}</Text> — В имплементации используется wait-free алгоритм от Michael & Scott, адаптированный для работы с garbage collector'ом. Этот алгоритм довольно эффективен и, что самое важное, очень быстр, т.к. построен на CAS. Метод size() может работать долго, т.ч. лучше постоянно его не дергать.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"ConcurrentLinkedDeque<E>"}</Text> — Deque расшифровывается как Double ended queue и читается как «Deck». Это означает, что данные можно добавлять и вытаскивать с обоих сторон. Соответственно, класс поддерживает оба режима работы: FIFO (First In First Out) и LIFO (Last In First Out). На практике, ConcurrentLinkedDeque стоит использовать только, если обязательно нужно LIFO, т.к. за счет двунаправленности нод данный класс проигрывает по производительности на 40% по сравнению с ConcurrentLinkedQueue.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"BlockingQueue<E>"}</Text> — При обработке больших потоков данных через очереди становится явно недостаточно использования ConcurrentLinkedQueue. Если потоки, разгребающие очередь перестанут справляться с наплывом данных, то можно довольно быстро схлопотать out of memory или перегрузить IO/Net настолько, что производительность упадет в разы пока не настанет отказ системы по таймаутам или из за отсутствия свободных дескрипторов в системе. Для таких случаев нужна queue с возможностью задать размер очереди или с блокировками по условиям. Тут то и появляется интерфейс BlockingQueue, открывающий дорогу к целому набору полезных классов. Помимо возможности задавать размер queue, добавились новые методы, которые реагируют по-разному на незаполнение или переполнение queue. Так, например, при добавлении элемента в переполненную queue, один метод кинет IllegalStateException, другой вернет false, третий заблокирует поток, пока не появится место, четвертый же заблокирует поток с таймаутом и вернет false, если место так и не появится. Также стоит отметить, что блокирующие очереди не поддерживают null значения, т.к. это значение используется в методе poll как индикатор таймаута.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"ArrayBlockingQueue<E>"}</Text> — Класс блокирующей очереди, построенный на классическом кольцевом буфере. Помимо размера очереди, доступна возможность управлять «честностью» блокировок. Если fair=false (по умолчанию), то очередность работы потоков не гарантируется. Более подробно о «честности» можно посмотреть в описании ReentrantLock'a.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"DelayQueue<E extends Delayed>"}</Text> — Довольно специфичный класс, который позволяет вытаскивать элементы из очереди только по прошествии некоторой задержки, определенной в каждом элементе через метод getDelay интерфейса Delayed.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"LinkedBlockingQueue<E>"}</Text> — Блокирующая очередь на связанных нодах, реализованная на «two lock queue» алгоритме: один лок на добавление, другой на вытаскивание элемента. За счет двух локов, по сравнению с ArrayBlockingQueue, данный класс показывает более высокую производительность, но и расход памяти у него выше. Размер очереди задается через конструктор и по умолчанию равен Integer.MAX_VALUE.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"PriorityBlockingQueue<E>"}</Text> — Является многопоточной оберткой над PriorityQueue. При вставлении элемента в очередь, его порядок определяется в соответствии с логикой Comparator'а или имплементации Comparable интерфейса у элементов. Первым из очереди выходит самый наименьший элемент.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"SynchronousQueue<E>"}</Text> — Эта очередь работает по принципу один вошел, один вышел. Каждая операция вставки блокирует «Producer» поток до тех пор, пока «Consumer» поток не вытащит элемент из очереди и наоборот, «Consumer» будет ждать пока «Producer» не вставит элемент.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"BlockingDeque<E>"}</Text> — Интерфейс, описывающий дополнительные методы для двунаправленной блокирующей очереди. Данные можно вставлять и вытаскивать с двух сторон очереди.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"LinkedBlockingDeque<E>"}</Text> — Двунаправленная блокирующая очередь на связанных нодах, реализованная как простой двунаправленный список с одним локом. Размер очереди задается через конструктор и по умолчанию равен Integer.MAX_VALUE.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"TransferQueue<E>"}</Text> — Данный интерфейс может быть интересен тем, что при добавлении элемента в очередь существует возможность заблокировать вставляющий «Producer» поток до тех пор, пока другой поток «Consumer» не вытащит элемент из очереди. Блокировка может быть как с таймаутом, так и вовсе может быть заменена проверкой на наличие ожидающих «Consumer»ов. Тем самым появляется возможность реализации механизма передачи сообщений с поддержкой как синхронных, так и асинхронных сообщений
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"LinkedTransferQueue<E>"}</Text> — Реализация TransferQueue на основе алгоритма Dual Queues with Slack. Активно использует CAS и парковку потоков, когда они находятся в режиме ожидания.
                </Paragraph>
                <Title>Synchronizers</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>CountDownLatch</Text> — Позволяет одному или нескольким потокам ожидать до тех пор, пока не завершится определенное количество операций, выполняющих в других потоках. Классический пример с драйвером довольно неплохо описывает логику класса: Потоки, вызывающие драйвер, будут висеть в методе await (с таймаутом или без), пока поток с драйвером не выполнит инициализацию с последующим вызовом метода countDown. Этот метод уменьшает счетчик count down на единицу. Как только счетчик становится равным нулю, все ожидающие потоки в await продолжат свою работу, а все последующие вызовы await будут проходить без ожиданий. Счетчик count down одноразовый и не может быть сброшен в первоначальное состояние.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>CyclicBarrier</Text> — Может использоваться для синхронизации заданного количества потоков в одной точке. Барьер достигается когда N-потоков вызовут метод await(...) и заблокируются. После чего счетчик сбрасывается в исходное значение, а ожидающие потоки освобождаются. Дополнительно, если нужно, существует возможность запуска специального кода до разблокировки потоков и сброса счетчика. Для этого через конструктор передается объект с реализацией Runnable интерфейса.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"Exchanger<V>"}</Text> — Как видно из названия, основное предназначение данного класса — это обмен объектами между двумя потоками. При этом, также поддерживаются null значения, что позволяет использовать данный класс для передачи только одного объекта или же просто как синхронизатор двух потоков. Первый поток, который вызывает метод exchange(...) заблокируется до тех пор, пока тот же метод не вызовет второй поток. Как только это произойдет, потоки обменяются значениями и продолжат свою работу.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>Phaser</Text> — Улучшенная реализация барьера для синхронизации потоков, которая совмещает в себе функционал CyclicBarrier и CountDownLatch, вбирая в себя самое лучшее из них. Так, количество потоков жестко не задано и может динамически меняться. Класс может повторно переиспользоваться и сообщать о готовности потока без его блокировки.
                </Paragraph>
                <Title>Executors</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"Future<V>"}</Text> — Замечательный интерфейс для получения результатов работы асинхронной операции. Ключевым методом здесь является метод get, который блокирует текущий поток (с таймаутом или без) до завершения работы асинхронной операции в другом потоке. Также, дополнительно существуют методы для отмены операции и проверки текущего статуса. В качестве имплементации часто используется класс FutureTask.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"RunnableFuture<V>"}</Text> — Если Future — это интерфейс для Client API, то интерфейс RunnableFuture уже используется для запуска асинхронной части. Успешное завершение метода run() завершает асинхронную операцию и позволяет вытаскивать результаты через метод get
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"Callable<V>"}</Text> — Расширенный аналог интерфейса Runnable для асинхронных операций. Позволяет возвращать типизированное значение и кидать checked exception. Несмотря на то, что в этом интерфейсе отсутсвует метод run(), многие классы java.util.concurrent поддерживают его наряду с Runnable.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"FutureTask<V>"}</Text> — Имплементация интерфейса Future/RunnableFuture. Асинхронная операция принимается на вход одного из конструкторов в виде Runnable или Callable объектов. Сам же класс FutureTask предназначен для запуска в worker потоке, например через new Thread(task).start(), или через ThreadPoolExecutor. Результаты работы асинхронной операции вытаскиваются через метод get(...).
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>Delayed</Text> — Используется для асинхронных задач, которые должны начаться в будущем, а также в DelayQueue. Позволяет задавать время до начала асинхронной операции.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"ScheduledFuture<V>"}</Text> — Маркерный интерфейс, объединяющий Future и Delayed интерфейсы.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>{"RunnableScheduledFuture<V>"}</Text> — Интерфейс, объединяющий RunnableFuture и ScheduledFuture. Дополнительно можно указывать является ли задача одноразовой или же должна запускаться с заданной периодичностью.
                </Paragraph>
                <Title>Executor Services</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>Executor</Text> — Представляет собой базовый интерфейс для классов, реализующих запуск Runnable задач. Тем самым обеспечивается развязка между добавлением задачи и способом её запуска.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>ExecutorService</Text> — Интерфейс, который описывает сервис для запуска Runnable или Callable задач. Методы submit на вход принимают задачу в виде Callable или Runnable, а в качестве возвращаемого значения идет Future, через который можно получить результат. Методы invokeAll работают со списками задач с блокировкой потока до завершения всех задач в переданном списке или до истечения заданного таймаута. Методы invokeAny блокируют вызывающий поток до завершения любой из переданных задач. В дополнении ко всему, интерфейс содержит методы для graceful shutdown. После вызова метода shutdown, данный сервис больше не будет принимать задачи, кидая RejectedExecutionException при попытке закинуть задачу в сервис.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>ScheduledExecutorService</Text> — В дополнении к методам ExecutorService, данный интерфейс добавляет возможность запускать отложенные задачи.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>AbstractExecutorService</Text> — Абстрактный класс для построения ExecutorService'a. Имплементация содержит базовую имплементацию методов submit, invokeAll, invokeAny. От этого класса наследуются ThreadPoolExecutor, ScheduledThreadPoolExecutor и ForkJoinPool.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>Executors</Text> — Класс-фабрика для создания ThreadPoolExecutor, ScheduledThreadPoolExecutor. Если нужно создать один из этих пулов, эта фабрика именно то, что нужно. Также, тут содержатся разные адаптеры Runnable-Callable, PrivilegedAction-Callable, PrivilegedExceptionAction-Callable и другие.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>ThreadPoolExecutor</Text> — Очень мощный и важный класс. Используется для запуска асинхронных задач в пуле потоков. Тем самым практически полностью отсутствует оверхэд на поднятие и остановку потоков. А за счет фиксируемого максимума потоков в пуле обеспечивается прогнозируемая производительность приложения. Как было ранее сказано, создавать данный пул предпочтительно через один из методов фабрики Executors. Если же стандартных конфигураций будет недостаточно, то через конструкторы или сеттеры можно задать все основые параметры пула.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>ScheduledThreadPoolExecutor</Text> — В дополнении к методам ThreadPoolExecutor, позволяет запускать задачи после определенной задержки, а также с некоторой периодичностью, что позволяет реализовать на базе этого класса Timer Service.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>ThreadFactory</Text> — По умолчанию, ThreadPoolExecutor использует стандартную фабрику потоков, получаемую через Executors.defaultThreadFactory(). Если нужно что-то больше, например задание приоритета или имени потока, то можно создать класс с реализацией этого интерфейса и передать его в ThreadPoolExecutor.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>RejectedExecutionHandler</Text> - Позволяет определить обработчик для задач, которые по каким то причинам не могут быть выполнены через ThreadPoolExecutor. Такой случай может произойти, когда нет свободных потоков или сервис выключается или выключен (shutdown). Несколько стандартных имплементаций находятся в классе ThreadPoolExecutor: CallerRunsPolicy — запускает задачу в вызывающем потоке; AbortPolicy — кидает эксцепшен; DiscardPolicy — игнорирует задачу; DiscardOldestPolicy — удаляет самую старую незапущенную задачу из очереди, затем пытается добавить новую задачу еще раз.
                </Paragraph>
                <Title>Fork Join</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>ForkJoinPool</Text> - Представляет собой точку входа для запуска корневых (main) ForkJoinTask задач. Подзадачи запускаются через методы задачи, от которой нужно отстрелиться (fork). По умолчанию создается пул потоков с количеством потоков равным количеству доступных для JVM процессоров (cores).
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>ForkJoinTask</Text> - Базовый класс для всех Fork Join задач. Из ключевых методов можно отметить: fork() — добавляет задачу в очередь текущего потока ForkJoinWorkerThread для асинхронного выполнения; invoke() — запускает задачу в текущем потоке; join() — ожидает завершения подзадачи с возвращением результата; invokeAll(...) — объединяет все три предыдущие предыдущие операции, выполняя две или более задач за один заход; adapt(...) — создает новую задачу ForkJoinTask из Runnable или Callable объектов.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>RecursiveTask</Text> - Абстрактный класс от ForkJoinTask, с объявлением метода compute, в котором должна производиться асинхронная операция в наследнике.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>RecursiveAction</Text> - Отличается от RecursiveTask тем, не возвращает результат.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>ForkJoinWorkerThread</Text> - Используется в качестве имплементации по умолчанию в ForkJoinPoll. При желании можно отнаследоваться и перегрузить методы инициализации и завершения worker потока.
                </Paragraph>
                <Title>Completion Service</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>CompletionService</Text> - Интерфейс сервиса с развязкой запуска асинхронных задач и получением результатов. Так, для добавления задач используются методы submit, а для вытаскивания результатов завершенных задач используются блокирующий метод take и неблокирующий poll.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>ExecutorCompletionService</Text> -  По сути является враппером над любым классом, реализующим интерфейс Executor, например ThreadPoolExecutor или ForkJoinPool. Используется преимущественно тогда, когда хочется абстрагироваться от способа запуска задач и контроля за их исполнением. Если есть завершенные задачи — вытаскиваем их, если нет — ждем в take пока что-нибудь не завершится. В основе сервиса по умолчанию используется LinkedBlockingQueue, но может быть передана и любая другая имплементация BlockingQueue.
                </Paragraph>
                <Title>Locks</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>Condition</Text> - Интерфейс, который описывает альтернативные методы стандарным wait/notify/notifyAll. Объект с условием чаще всего получается из локов через метод lock.newCondition(). Тем самым можно получить несколько комплектов wait/notify для одного объекта.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>Lock</Text> - Базовый интерфейс из lock framework, предоставляющий более гибкий подход по ограничению доступа к ресурсам/блокам нежели при использовании synchronized. Так, при использовании нескольких локов, порядок их освобождения может быть произвольный. Плюс имеется возможность пойти по альтернативному сценарию, если лок уже кем то захвачен.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>ReentrantLock</Text> - Лок на вхождение. Только один поток может зайти в защищенный блок. Класс поддерживает «честную» (fair) и «нечестную» (non-fair) разблокировку потоков. При «честной» разблокировке соблюдается порядок освобождения потоков, вызывающих lock(). При «нечестной» разблокировке порядок освобождения потоков не гарантируется, но, как бонус, такая разблокировка работает быстрее. По умолчанию, используется «нечестная» разблокировка.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>ReadWriteLock</Text> - Дополнительный интерфейс для создания read/write локов. Такие локи необычайно полезны, когда в системе много операций чтения и мало операций записи.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>ReentrantReadWriteLock</Text> - Очень часто используется в многопоточных сервисах и кешах, показывая очень хороший прирост производительности по сравнению с блоками synchronized. По сути, класс работает в 2-х взаимоисключающих режимах: много reader'ов читают данные в параллель и когда только 1 writer пишет данные.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>ReentrantReadWriteLock.ReadLock</Text> - Read lock для reader'ов, получаемый через readWriteLock.readLock().
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>ReentrantReadWriteLock.WriteLock</Text> - Write lock для writer'ов, получаемый через readWriteLock.writeLock().
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>LockSupport</Text> - Предназначен для построения классов с локами. Содержит методы для парковки потоков вместо устаревших методов Thread.suspend() и Thread.resume().
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>AbstractOwnableSynchronizer</Text> - Базовый класс для построения механизмов сихнронизации. Содержит всего одну пару геттер/сеттер для запоминания и чтения эксклюзивного потока, который может работать с данными.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>AbstractQueuedSynchronizer</Text> - Используется в качестве базового класса для механизма синхронизации в FutureTask, CountDownLatch, Semaphore, ReentrantLock, ReentrantReadWriteLock. Может применяться при создании новых механизмов синхронизации, полагающихся на одиночное и атомарное значение int.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>AbstractQueuedLongSynchronizer</Text> - Разновидность AbstractQueuedSynchronizer, которая поддерживает атомарное значение long.
                </Paragraph>
                <Title>Atomics</Title>
                <Paragraph style={{fontSize: 20}}>
                    <Text strong>AtomicBoolean, AtomicInteger, AtomicLong, AtomicIntegerArray, AtomicLongArray</Text> — Что если в классе нужно синхронизировать доступ к одной простой переменной типа int? Можно использовать конструкции с synchronized, а при использовании атомарных операций set/get, подойдет также и volatile. Но можно поступить еще лучше, использовав новые классы Atomic*. За счет использования CAS, операции с этими классами работают быстрее, чем если синхронизироваться через synchronized/volatile. Плюс существуют методы для атомарного добавления на заданную величину, а также инкремент/декремент.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>AtomicReference</Text> - Класс для атомарных операцией с ссылкой на объект.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>AtomicMarkableReference</Text> - Класс для атомарных операцией со следующей парой полей: ссылка на объект и битовый флаг (true/false).
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>AtomicStampedReference</Text> - Класс для атомарных операцией со следующей парой полей: ссылка на объект и int значение.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text code>AtomicReferenceArray</Text> -  Массив ссылок на объекты, который может атомарно обновляться.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                    <Text strong>AtomicIntegerFieldUpdater, AtomicLongFieldUpdater,AtomicReferenceFieldUpdater</Text> — Классы для атомарного обновления полей по их именам через reflection. Смещение полей для CAS определяется в конструкторе и кешируются, т.ч. тут нет сильного падения производительности из за reflection.
                </Paragraph>
            </Typography>)
    }
}