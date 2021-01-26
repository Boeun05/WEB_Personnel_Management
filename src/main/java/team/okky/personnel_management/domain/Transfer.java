package team.okky.personnel_management.domain;

import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Getter
public class Transfer {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "trans_id")
    private Long transId;
    private String transPosition;
    private String transCurPosition;
    private String transCurDept;
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDate approveDate;
    private LocalDate appointDate;

    @ManyToOne(fetch = FetchType.LAZY) @JoinColumn(name = "dept_id")
    private Department department;
    @ManyToOne(fetch = FetchType.LAZY) @JoinColumn(name = "emp_id")
    private Employee employee;
}
