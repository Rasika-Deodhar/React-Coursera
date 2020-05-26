import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

function RenderDish({dishDetails}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="20%" top src={dishDetails.image} alt={dishDetails.name} />
                        <CardBody>
                            <CardTitle>{dishDetails.name}</CardTitle>
                            <CardText>{dishDetails.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function RenderComments({dishDetails}) {
    const comment = dishDetails.comments.map((c) => {
        return (
            <div className="col-12 col-md-5 m-1">
                <p>{c.comment}</p>
                <p>--{c.author} &nbsp; &nbsp;
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(c.date)))}
                </p>
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {comment}
                </div>
            </div>
        </div>
    );
}

const DishDetail = (props) => {
    if (props.dishDetail != null) {
        return (
            <div className="container">
                <RenderDish dishDetails={props.dishDetail} />
                <div><h4>Comments</h4></div>
                <RenderComments dishDetails={props.dishDetail} />
            </div>
        );
    }
    else {
        return (
            <div> </div>
        );
    }
}
export default DishDetail;