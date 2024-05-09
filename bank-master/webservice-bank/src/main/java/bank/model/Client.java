package bank.model;

import java.util.Date;
import java.util.List;

import javax.persistence.*;

import lombok.Data;

@Data
@Entity
@Table(name = "client")
public class Client {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String identityCard;
	private String name;
	//@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date dateOfBirth;
	private String address;
	@OneToMany(mappedBy = "client", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<CreditAccount> creditAccount;
	@OneToMany(mappedBy = "client", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<DepositAccount> depositAccount;
	
}
