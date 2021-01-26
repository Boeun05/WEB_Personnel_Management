package team.okky.personnel_management.transfer;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.thymeleaf.util.StringUtils;

@RestController
@RequiredArgsConstructor
public class TransferController {

    @GetMapping("/transfer")
    public void transfer(@RequestParam(value = "employee", required = false) String employeeName,
                           @RequestParam(value = "department", required = false) String departmentName,
                           @RequestParam(value = "position", required = false) String position){

        if(!StringUtils.isEmpty(employeeName)){

        }
        else if(!StringUtils.isEmpty(departmentName)){

        }
        else if(!StringUtils.isEmpty(position)){

        }else{

        }

    }

    @PostMapping("/transfer")
    public void tranferForm(){

    }

}
