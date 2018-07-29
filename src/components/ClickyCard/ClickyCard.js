import React, {Component} from "react";

class ClickyCard extends Component {
    
    render() {
        const handleClick = this.props.handleClick;
        return (
        <article className="card">
            <img src={this.props.image} alt="clickycard" dataid={this.props.id} dataname={this.props.name} onClick={() => handleClick(this.props.id)} />
        </article>
        )
    }
};

export default ClickyCard;
    