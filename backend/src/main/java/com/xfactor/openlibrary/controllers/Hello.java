package com.xfactor.openlibrary.controllers;

import java.util.HashMap;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

//http://localhost:8080/hi/Prattay

@RestController // to declare a class as controller
@RequestMapping("hellocontroller")
public class Hello {

    @GetMapping("/hello") // in order to mark a particular method as a getmapping path
    public String hello(@RequestParam String name, int year) {
        return name + " " + " born in the year " + year;
    }

    public Object toString(String name, int number) {
        return "hi" + " " + name + "!!" + number;
    }

    @GetMapping("/hi/{name}/{number}")
    public Object sayhi(@PathVariable String name, @PathVariable int number) {
        // return "hi" + " " + name + "!!";
        return toString(name, number);
    }

    @GetMapping("/hi/{name}") // request parameter and file path
    public Object sayhi_1(@PathVariable String name, @RequestParam int number) {
        return toString(name, number); // path variables must come first then all ur request [aram]
    }

    @GetMapping("/prattay/{name}/{age}")
    public HashMap<String, Object> sayPrattay(@PathVariable String name,
            @PathVariable int age) {
        HashMap<String, Object> hm = new HashMap<>();
        HashMap<String, Object> hm1 = new HashMap<>();
        hm1.put("boolean", true);
        hm.put("name", name);
        hm.put("age", age);
        hm.put("hasmap", hm1);
        return hm;
    }

}
