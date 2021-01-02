import React from "react";
import Solid from "./content/Solid";
import OOP from "./content/OOP";
import FinalString from "./content/final/FinalString";
import ClassContent from "./content/ClassContent";
import Collection from "./content/collection/Collection";
import Abstract from "./content/Abstract";
import Equals from "./content/equals/Equals";
import Primitive from "./content/primitive/Primitive";
import Static from "./content/Static";
import Generic from "./content/Generic";
import Spring from "./content/Spring";
import Pattern from "./content/Pattern";
import Http from "./content/Http";
import Sql from "./content/Sql";
import Servlet from "./content/Servlet";
import SpringMvc from "./content/spring/SpringMvc";
import SpringData from "./content/SpringData";
import Jdbc from "./content/Jdbc";
import Sort from "./content/sort/Sort";
import MultiThread from "./content/multiThread/MultiThread";
import Concurrent from "./content/Concurrent";
import Stream from "./content/Stream";
import Database from "./content/Database";
import TryWithResources from "./content/TryWithResources";
import IOvsNIO from "./content/IOvsNIO";
import NoSql from "./content/NoSql";
import Object from "./content/Object";
import Type from "./content/Type";
import Socket from "./content/Socket";
import Exceptions from "./content/exceptions/Exceptions";
import Hibernate from "./content/Hibernate";
import Criteria from "./content/Criteria";
import CAP from "./content/CAP";
import HATEOAS from "./content/HATEOAS";
import SpringBoot from "./content/SpringBoot";
import JMS from "./content/JMS";
import Kafka from "./content/Kafka";

export default class GetContent extends React.Component {
    render() {
        switch (this.props.children){
            case 'SOLID принципы': return <Solid />
            case 'final, String': return <FinalString />
            case 'Анонимные, Внутренние, Локальные классы': return <ClassContent />
            case 'Коллекции': return <Collection />
            case 'Интерфейс и Абстрактный класс': return <Abstract />
            case 'Equals и hashCode()': return <Equals />
            case 'Primitive vs object': return <Primitive />
            case 'Static': return <Static />
            case 'Generics': return <Generic />
            case 'Spring': return <Spring />
            case 'Паттерны': return <Pattern />
            case 'HTTP HTTPS': return <Http />
            case 'SQL': return <Sql />
            case 'Servlets': return <Servlet />
            case 'Spring MVC': return <SpringMvc />
            case 'Spring Data': return <SpringData />
            case 'JDBC, JPA, ORM': return <Jdbc />
            case 'Сортировки': return <Sort />
            case 'Многопоточность': return <MultiThread />
            case 'Concurrent': return <Concurrent />
            case 'Stream': return <Stream />
            case 'БД': return <Database />
            case 'try with resources': return <TryWithResources />
            case 'io vs nio': return <IOvsNIO />
            case 'no sql': return <NoSql />
            case 'Object': return <Object />
            case 'Типы': return <Type />
            case 'Socket': return <Socket />
            case 'Exceptions': return <Exceptions />
            case 'Hibernate': return <Hibernate />
            case 'Criteria API': return <Criteria />
            case 'CAP теорема': return <CAP />
            case 'HATEOAS': return <HATEOAS />
            case 'Spring Boot': return <SpringBoot />
            case 'JMS': return <JMS />
            case 'Kafka': return <Kafka />
            default :return <OOP />
        }
    }
}