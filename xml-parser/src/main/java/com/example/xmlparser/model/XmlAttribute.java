package com.example.xmlparser.model;

/**
 * XML属性模型类，用于表示XML元素的属性
 */
public class XmlAttribute {
    private String name;
    private String value;

    public XmlAttribute() {
    }

    public XmlAttribute(String name, String value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}