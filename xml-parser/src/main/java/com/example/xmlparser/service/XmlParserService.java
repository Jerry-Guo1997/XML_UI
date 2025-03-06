package com.example.xmlparser.service;

import com.example.xmlparser.model.XmlAttribute;
import com.example.xmlparser.model.XmlElement;
import org.springframework.stereotype.Service;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.ByteArrayInputStream;
import java.nio.charset.StandardCharsets;

@Service
public class XmlParserService {

    public XmlElement parseXml(String xmlContent) throws Exception {
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();
        Document document = builder.parse(new ByteArrayInputStream(xmlContent.getBytes(StandardCharsets.UTF_8)));
        Element rootElement = document.getDocumentElement();
        return parseElement(rootElement);
    }

    private XmlElement parseElement(Element element) {
        XmlElement xmlElement = new XmlElement();
        xmlElement.setTagName(element.getTagName());

        // 处理属性
        var attributes = element.getAttributes();
        for (int i = 0; i < attributes.getLength(); i++) {
            Node attribute = attributes.item(i);
            xmlElement.addAttribute(new XmlAttribute(attribute.getNodeName(), attribute.getNodeValue()));
        }

        // 处理子元素
        NodeList childNodes = element.getChildNodes();
        StringBuilder textContent = new StringBuilder();

        for (int i = 0; i < childNodes.getLength(); i++) {
            Node node = childNodes.item(i);
            if (node.getNodeType() == Node.ELEMENT_NODE) {
                xmlElement.addChild(parseElement((Element) node));
            } else if (node.getNodeType() == Node.TEXT_NODE) {
                String text = node.getNodeValue().trim();
                if (!text.isEmpty()) {
                    textContent.append(text);
                }
            }
        }

        xmlElement.setValue(textContent.toString());
        return xmlElement;
    }
}