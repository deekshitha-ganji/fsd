/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.beans;

/**
 *
 * @author Deekshitha
 */
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

/**
 *
 * @author ADMIN
 */
public class EmpDao {
  
    private Connection getConnection(){        
         Connection con= null;
         try{
             Class.forName("com.mysql.jdbc.Driver");
            con=DriverManager.getConnection("jdbc:mysql://localhost:3306/s1","root","P^n0(oorG");
         }
         catch(Exception ex){
             Logger.getLogger(EmpDao.class.getName()).log(Level.SEVERE, null, ex);
         }
         return con;
            
    }
    
    public List<Employee> getEmployeeList(){
        List<Employee> empList = new ArrayList<>();
        Connection con = getConnection();
        Statement st;
        try {
            st = con.createStatement();
            ResultSet rs=st.executeQuery("select * from emp");
            while(rs.next()){
                Employee e = new Employee();
                e.setEmpId(rs.getInt(1));
                e.setName(rs.getString(2));
                e.setDeptNo(rs.getInt(3));
                e.setBranch(rs.getString(4));
                empList.add(e);
            }
        } catch (SQLException ex) {
            Logger.getLogger(EmpDao.class.getName()).log(Level.SEVERE, null, ex);
        }
        finally{
            try {
                con.close();
            } catch (SQLException ex) {
                Logger.getLogger(EmpDao.class.getName()).log(Level.SEVERE, null, ex);
            }
        }        
        return empList;
    }
   
}
