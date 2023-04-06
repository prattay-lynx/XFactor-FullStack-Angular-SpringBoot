package com.xfactor.openlibrary.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xfactor.openlibrary.Domain.Student;
import com.xfactor.openlibrary.Repositories.StudentRepository;

@RestController
@RequestMapping("Student")
public class StudentController {
    private StudentRepository studentRepository;

    public StudentController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @PostMapping("/saveStudents")
    public Student saveStudent(@RequestBody Student student) {
        if (student.getId() == null) {
            Student student2 = studentRepository.save(student);
            return student2;
        }
        return null;
    }

    @PutMapping("/updateStudent")
    public Student updateStudent(@RequestBody Student student) {
        if (student.getId() != null) {
            Student student2 = studentRepository.save(student);
            return student2;
        }
        return null;
    }

    @GetMapping("/getAllStudents")
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @GetMapping("/findTotalStudents")
    public Long findTotalStudents() {
        return studentRepository.count();
    }

    @GetMapping("findByStudentId/{id}")
    public Student findById(@PathVariable Long id) {
        Optional<Student> optionalOfStudent = studentRepository.findById(id);
        if (optionalOfStudent.isPresent()) {
            return optionalOfStudent.get();
        }
        return null;
    }

    @DeleteMapping("deleteStudents/{id}")
    public void deleteStudents(@PathVariable Long id) {
        studentRepository.deleteById(id);
    }

    @GetMapping("findByname/{name}")
    public List<Student> findByname(@PathVariable String name) {
        List<Student> students = studentRepository.findByName(name);
        return students;
    }
}

// package com.xfactor.openlibrary.controllers;

// import java.util.ArrayList;
// import java.util.HashMap;

// import org.springframework.web.bind.annotation.GetMapping;
// // import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestMapping;
// // import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RestController;

// @RestController
// @RequestMapping("Student")
// public class StudentController {

// ArrayList<HashMap<Object, Object>> list = new ArrayList<>();

// @GetMapping("/students")
// public ArrayList<HashMap<Object, Object>> getStudents() {

// Student s1 = new Student("John", 20, "CSE", 17);
// Student s2 = new Student("William", 19, "IT", 18);
// Student s3 = new Student("Martin", 22, "ECE", 16);
// Student s4 = new Student("Santiago", 21, "MECH", 10);
// list.add(s1.toMap());
// list.add(s2.toMap());
// list.add(s3.toMap());
// list.add(s4.toMap());

// return list;
// }

// @GetMapping("/getstudentid/{rollno}")
// public String getStudentName(@PathVariable int rollno) {
// for (HashMap<Object, Object> student : list) {
// if (student.containsKey("rollno") && student.get("rollno").equals(rollno)) {
// return (String) student.get("name") + " with roll no: " + rollno;
// }
// }
// return "No student found with rollno " + rollno;
// }
// }

// class Student {
// private String name;
// private int age;
// private String dept;
// private int rollno;

// public String getName() {
// return name;
// }

// public void setName(String name) {
// this.name = name;
// }

// public int getAge() {
// return age;
// }

// public void setAge(int age) {
// this.age = age;
// }

// public String getDept() {
// return dept;
// }

// public void setDept(String dept) {
// this.dept = dept;
// }

// public int getRollno() {
// return rollno;
// }

// public void setRollno(int rollno) {
// this.rollno = rollno;
// }

// public Student(String name, int age, String dept, int rollno) {
// this.setName(name);
// this.setAge(age);
// this.setDept(dept);
// this.setRollno(rollno);
// }

// public HashMap<Object, Object> toMap() {
// HashMap<Object, Object> map = new HashMap<>();
// map.put("name", this.getName());
// map.put("age", this.getAge());
// map.put("dept", this.getDept());
// map.put("rollno", this.getRollno());
// return map;
// }
