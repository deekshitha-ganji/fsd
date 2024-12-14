/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example;

/**
 *
 * @author Deekshitha
 */
import com.beans.EmpDao;
import com.beans.Employee;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;

/**
 *
 * @author ADMIN
 */
public class ViewController extends AbstractController {
    
    public ViewController() {
    }
    
    protected ModelAndView handleRequestInternal(
            HttpServletRequest request,
            HttpServletResponse response) throws Exception {
       ModelAndView mav=new ModelAndView();
       List<Employee> empList=new EmpDao().getEmployeeList();
       mav.addObject("empList",empList);
       mav.setViewName("viewEmp");
       return mav;
    }
    
}
