import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const FoodCards = ({ data }) => {
  // console.log(data);
  const { label, image, uri } = data;
  // console.log(label);
  const id = uri.split("#")[1];
  const navigate = useNavigate();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Title className="text-truncate text-center">{label}</Card.Title>

        <Card.Img
          variant="top"
          src={image}
          style={{ height: "5rem", width: "5rem", margin: "0 auto" }}
        />

        <Button
          style={{ margin: "1rem auto" }}
          variant="primary"
          onClick={() => navigate(`/search/${id}`, { state: data })}
        >
          Go Detail
        </Button>
      </Card>
    </div>
  );
};

export default FoodCards;
