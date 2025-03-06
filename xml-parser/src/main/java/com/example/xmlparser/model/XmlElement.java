package com.example.xmlparser.model;

import java.util.ArrayList;
import java.util.List;

/**
 * XML元素模型类，用于表示解析后的XML元素
 */
public class XmlElement {
    private String tagName;
    private String value;
    private List<XmlElement> children;
    private List<XmlAttribute> attributes;

    public XmlElement() {
        this.children = new ArrayList<>();
        this.attributes = new ArrayList<>();
    }

    public XmlElement(String tagName, String value) {
        this();
        this.tagName = tagName;
        this.value = value;
    }

    public String getTagName() {
        return tagName;
    }

    public void setTagName(String tagName) {
        this.tagName = tagName;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public List<XmlElement> getChildren() {
        return children;
    }

    public void setChildren(List<XmlElement> children) {
        this.children = children;
    }

    public void addChild(XmlElement child) {
        this.children.add(child);
    }

    public List<XmlAttribute> getAttributes() {
        return attributes;
    }

    public void setAttributes(List<XmlAttribute> attributes) {
        this.attributes = attributes;
    }

    public void addAttribute(XmlAttribute attribute) {
        this.attributes.add(attribute);
    }
}