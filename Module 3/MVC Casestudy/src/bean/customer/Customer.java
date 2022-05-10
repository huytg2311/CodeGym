package bean.customer;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Customer {
    private int id;
    private CustomerType customerType;
    private String name;
    private Date birthday;
    private boolean gender;
    private String idCard;
    private String phone;
    private String email;
    private String address;

    public Customer() {
    }

    public Customer(int id) {
        this.id = id;
    }

    public Customer(int id, CustomerType customerType, String name, Date birthday, boolean gender, String idCard, String phone, String email, String address) {
        this.id = id;
        this.customerType = customerType;
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.idCard = idCard;
        this.phone = phone;
        this.email = email;
        this.address = address;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public CustomerType getCustomerType() {
        return customerType;
    }

    public void setCustomerType(CustomerType customerType) {
        this.customerType = customerType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBirthday() {
        return new SimpleDateFormat("dd-MM-yyyy").format(birthday);
    }

    public String getBirthdayForInput() {
        return new SimpleDateFormat("yyyy-MM-dd").format(birthday);
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getGender() {
        return (gender) ? "Male" : "Female";
    }

    public boolean isMale() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
