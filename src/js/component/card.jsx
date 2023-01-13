import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
    <div>
        <div className="card">
        <img src="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68" className="card-img-top" alt="..."/>
            {/* <img
                className="card-img-top"
                src={props.img}
                alt="Card image cap"
            /> */}
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">
                    Find Out More!
                </a>
            </div>

            <br></br>

            <img src="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">
                    Find Out More!
                </a>
            </div>

            <br></br>

            <img src="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">
                    Find Out More!
                </a>
            </div>

            <br></br>

            <img src="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">
                    Find Out More!
                </a>
            </div>

            
        </div>
    </div>
);
};

// Card.propTypes = {
// img: PropTypes.string,
// title: PropTypes.string,
// text: PropTypes.string,
// };

export default Card;