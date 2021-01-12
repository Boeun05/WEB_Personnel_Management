package team.okky.personnel_management.controller;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import team.okky.personnel_management.dto.EmployeeDTO;
import team.okky.personnel_management.service.EmployeeService;

import java.util.List;

@Controller
@ResponseBody
@RequiredArgsConstructor
public class EmployeeController {

    private final EmployeeService employeeService;

    @GetMapping("/employee")
    public List<EmployeeDTO.ListIndex> viewByName(@RequestParam(required = false) String name,
                                                  @RequestParam(required = false) String deptName){
        List<EmployeeDTO.ListIndex> list = null;

        if(name != null){
            list = employeeService.viewAllByName(name);
        }
        else if(deptName != null){
            list = employeeService.viewAllByDept(deptName);
        }
        else{
            list = employeeService.viewAll();
        }
        return list;
    }

    @PostMapping("/employee")
    public void viewAddEmployee(@RequestBody EmployeeDTO.AddEmployee addEmployee){
        employeeService.createEmployee(addEmployee);
    }

    @PutMapping("/employee")
    public void viewUpdateEmployee(@RequestBody EmployeeDTO.UpdateEmployee updateEmployee){
        employeeService.updateEmployee(updateEmployee);
    }

    @GetMapping("/employee/duplication/{name}")
    public List<EmployeeDTO.ListIndex> viewDuplicationName(@PathVariable String name){
        return employeeService.viewAllByName(name);
    }

}
