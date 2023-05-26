package lk.ijse.dep10.pos.dto;

public class ItemDTO {
    private int code;
    private String description;
    private String quantity;
    private String price;

    public ItemDTO(int code, String description, String quantity, String price) {
        this.code = code;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }

    public ItemDTO() {
    }

    public int getCode() {
        return this.code;
    }

    public String getDescription() {
        return this.description;
    }

    public String getQuantity() {
        return this.quantity;
    }

    public String getPrice() {
        return this.price;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public boolean equals(final Object o) {
        if (o == this) return true;
        if (!(o instanceof ItemDTO)) return false;
        final ItemDTO other = (ItemDTO) o;
        if (!other.canEqual((Object) this)) return false;
        if (this.getCode() != other.getCode()) return false;
        final Object this$description = this.getDescription();
        final Object other$description = other.getDescription();
        if (this$description == null ? other$description != null : !this$description.equals(other$description))
            return false;
        final Object this$quantity = this.getQuantity();
        final Object other$quantity = other.getQuantity();
        if (this$quantity == null ? other$quantity != null : !this$quantity.equals(other$quantity)) return false;
        final Object this$price = this.getPrice();
        final Object other$price = other.getPrice();
        if (this$price == null ? other$price != null : !this$price.equals(other$price)) return false;
        return true;
    }

    protected boolean canEqual(final Object other) {
        return other instanceof ItemDTO;
    }

    public int hashCode() {
        final int PRIME = 59;
        int result = 1;
        result = result * PRIME + this.getCode();
        final Object $description = this.getDescription();
        result = result * PRIME + ($description == null ? 43 : $description.hashCode());
        final Object $quantity = this.getQuantity();
        result = result * PRIME + ($quantity == null ? 43 : $quantity.hashCode());
        final Object $price = this.getPrice();
        result = result * PRIME + ($price == null ? 43 : $price.hashCode());
        return result;
    }

    public String toString() {
        return "ItemDTO(code=" + this.getCode() + ", description=" + this.getDescription() + ", quantity=" + this.getQuantity() + ", price=" + this.getPrice() + ")";
    }
}
