import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dishDetails }) {
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

function RenderComments({ comments }) {
    if (comments != null) {
        const comment = comments.map((c) => {
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
    else {
        return (
            <div> </div>
        );
    }

}

const DishDetail = (props) => {
    if (props.dishDetail != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dishDetail.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dishDetail.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dishDetails={props.dishDetail} />
                    </div>

                    <div><h4>Comments</h4></div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments dishDetails={props.comments} />
                    </div>
                </div>

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