package team.okky.personnel_management.transfer;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.thymeleaf.util.StringUtils;
import team.okky.personnel_management.employee.EmployeeDTO;
import team.okky.personnel_management.employee.EmployeeService;
import team.okky.personnel_management.utils.dto.PageRequestDTO;
import team.okky.personnel_management.utils.dto.PageResultDTO;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class TransferController {

    private final TransferService transferService;

    @GetMapping("/transfer")
    public List<TransferDTO.Info> transfer(@RequestParam(value = "employee", required = false) String empName,
                                           @RequestParam(value = "department", required = false) String deptName,
                                           @RequestParam(value = "position", required = false) String empPosition,
                                           @RequestParam(value = "page", defaultValue = "1") Integer pageNo){

        List<TransferDTO.Info> transferList = null;
        PageResultDTO pageResultDTO = null;
        PageRequestDTO pageRequestDTO = new PageRequestDTO(pageNo);

        if(!StringUtils.isEmpty(empName)){
            transferList = transferService.findAllByEmpName(empName, pageRequestDTO);
            pageResultDTO = transferService.findPageByEmpName(empName, pageNo);
        }
        else if(!StringUtils.isEmpty(deptName)){
            transferList = transferService.findAllByDeptName(deptName, pageRequestDTO);
            pageResultDTO = transferService.findPageByDeptName(deptName, pageNo);
        }
        else if(!StringUtils.isEmpty(empPosition)){
            transferList = transferService.findAllByEmpPosition(empPosition, pageRequestDTO);
            pageResultDTO = transferService.findPageByEmpPosition(empPosition, pageNo);
        }
        else{
            transferList = transferService.findAll(pageRequestDTO);
            pageResultDTO = transferService.findPage(pageNo);
        }
        return transferList;
    }

    @PostMapping("/transfer")
    public void tranferForm(@ModelAttribute TransferDTO.AddForm addForm){
        transferService.addTransfer(addForm);
    }

}
