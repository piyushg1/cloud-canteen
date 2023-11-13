import { useDispatch } from "react-redux"
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from "reactstrap"
import { addItem } from "../../data/cartSlice"


const ResCard = ({ name, id, location, rating, cuisines, color1, color2 }) => {
    const dispatch = useDispatch()

    const handleAddItem = (name) => {
        dispatch(addItem(name))
    }

    return (
        <Card
            style={{
                width: '15rem',
                margin: '3rem'
            }}
        >
            <img
                alt="img"
                src={"https://placehold.co/600x400" + "/" + color1 + "/" + color2 + "?text=" + name}
            />
            <CardBody>
                <CardTitle tag="h5">
                    {name}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {location}
                </CardSubtitle>
                <CardText>
                    {cuisines}
                </CardText>
                <CardText>
                    {rating} ⭐
                </CardText>
                <Button color="success" outline='true' onClick={() => handleAddItem(name)}>
                    Add Item
                </Button>
            </CardBody>
        </Card>
    )
}

export default ResCard