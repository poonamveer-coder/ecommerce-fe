import axios from "axios";

const DeleteProductButton = ({ product, onDelete }) => {
  const deleteProduct = async () => {
    const isConfirmed = window.confirm(
      `Are you sure to delete ${product.name}`
    );
    if (isConfirmed) {
      //   e.preventDefault();

      const result = await axios.delete(
        `http://localhost:3000/Products/${product._id}`
      );

      onDelete();

      //call the delete api
      // axios.del
    }
  };
  return (
    <label>
      <img
        onClick={() => {
          deleteProduct();
        }}
        style={{ width: "30px" }}
        src="./delete.png"
      />
    </label>
  );
};

export default DeleteProductButton;
