import React from 'react';
import 'antd/dist/antd.css';
import {Typography} from 'antd';

const {Paragraph} = Typography;

export default class SpringBoot extends React.Component {
    render() {
        return (
            <Typography>
                <Paragraph style={{fontSize: 20}}>
                    Теперь переходим к следующей части. Допустим, нам надо сконфигурить подключение к MySQL базе данных. Если мы хотим использовать Spring Data JPA с Hibernate в качестве провайдера, нам потребуется сконфигурировать несколько бинов — EntityManagerFactory (основной класс JPA), DataSource для подключения непосредственно к базе через JDBC драйвер и т.п. Но с другой стороны, если мы это делаем каждый раз и, по сути, делаем одно и то же — почему бы это не автоматизировать? Скажем, если мы указали строку подключения к базе и добавили зависимость на MySQL драйвер — почему бы чему-то автоматически не создать все нужные бины для работы с MySQL? Именно это и делает Spring Boot. По сути, Spring Boot это просто набор классов конфигурации, которые создают нужные бины в контексте. Точно так же их можно создать руками, просто Boot это автоматизирует.
                </Paragraph>
                <Paragraph style={{fontSize: 20}}>
                   <ul>
                       <li>Аннотация @SpringBootApplication включает сканирование компонентов и авто-конфигурацию через аннотацию @EnableAutoConfiguration</li>
                       <li>Каждая конфигурация пытается сконфигурить различные аспекты приложения (web, JPA, AMQP etc), регистрируя нужные бины и используя различные условия (наличие / отсутствие бина, настройки, класса и т.п.)</li>
                       <li>Servlet container запускается, приложение готово к работе!</li>
                   </ul>
                </Paragraph>
            </Typography>)
    }
}