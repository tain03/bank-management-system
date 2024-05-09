package bank.model;

import java.util.Date;
import java.util.List;

import javax.persistence.*;

import lombok.Data;

@Data
@Entity
@Table(name = "credit_account")
public class CreditAccount {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String type;
	private double balance;
	@Column(name = "credit_limit")
	private double creditLimit;
	private Date createAt;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_client", referencedColumnName = "id")
	private Client client;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_employee", referencedColumnName = "id")
	private Employee employeeCreate;
	@OneToMany(mappedBy = "creditAccount", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Transaction> listTransaction;
	
	@PrePersist
	void placedAt() {
		this.createAt = new Date(); 
	}
}
