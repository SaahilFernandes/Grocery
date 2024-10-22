import React, { Component } from 'react';

class Section extends Component {
    render() {
        let { Section } = this.props;
        const findSection = () => {
        
        };
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card Title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default Card;
