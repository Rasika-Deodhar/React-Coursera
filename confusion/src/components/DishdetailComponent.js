import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dishDetails) {
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

    renderComments(dishDetails) {
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

    render() {
        if (this.props.dishDetail != null) {
            return [
                <div className="container">
                    {this.renderDish(this.props.dishDetail)}
                    <div><h4>Comments</h4></div>
                    {this.renderComments(this.props.dishDetail)}
                </div>
            ];
        }
        else {
            return (
                <div> </div>
            );
        }
    }
}

export default DishDetail;