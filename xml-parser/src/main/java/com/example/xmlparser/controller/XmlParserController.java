package com.example.xmlparser.controller;

import com.example.xmlparser.model.XmlElement;
import com.example.xmlparser.service.XmlParserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class XmlParserController {

    @Autowired
    private XmlParserService xmlParserService;

    @PostMapping("/parse")
    public ResponseEntity<XmlElement> parseXml(@RequestBody String xmlContent) {
        try {
            XmlElement result = xmlParserService.parseXml(xmlContent);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}