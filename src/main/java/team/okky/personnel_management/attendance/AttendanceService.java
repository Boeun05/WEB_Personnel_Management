package team.okky.personnel_management.attendance;

import team.okky.personnel_management.employee.Employee;
import team.okky.personnel_management.utils.dto.PageRequestDTO;
import team.okky.personnel_management.utils.dto.PageResultDTO;

import java.time.LocalDate;
import java.util.List;


public interface AttendanceService {

    public List<Attendance> autoCreateAttendance();
    public Attendance onWork(Employee employee);
    public Attendance offWork(Employee employee);
    public List<AttendanceDTO.ListAll> viewAll(PageRequestDTO pageRequestDTO);
    public PageResultDTO viewAllForPage(int pageNo);
    public AttendanceDTO.Status viewStatus();
    public List<AttendanceDTO.ListAll> viewStatusDetail(AttendanceStatus status);
    public List<AttendanceDTO.ListAll> viewByDate(LocalDate date);
    public List<AttendanceDTO.ListAll> viewByName(Long id);
    public List<AttendanceDTO.ListAll> viewByDateAndName(LocalDate date, Long id);

}