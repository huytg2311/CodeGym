package bean.contract;

import bean.service.AttachService;

public class ContractDetail implements Comparable<ContractDetail> {
    private int id;
    private Contract contract;
    private AttachService attachService;
    private int quantity;

    public ContractDetail(int id, Contract contract, AttachService attachService, int quantity) {
        this.id = id;
        this.contract = contract;
        this.attachService = attachService;
        this.quantity = quantity;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Contract getContract() {
        return contract;
    }

    public void setContract(Contract contract) {
        this.contract = contract;
    }

    public AttachService getAttachService() {
        return attachService;
    }

    public void setAttachService(AttachService attachService) {
        this.attachService = attachService;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    
    @Override
    public int compareTo(ContractDetail o) {
        return Integer.compare(this.contract.getCustomer().getId(), o.contract.getCustomer().getId());
    }
}
