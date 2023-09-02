function Card(props) {
    return (
        //     <div classname="container text-danger">
        //         <h1>I am Card {name1}</h1>
        //     </div>
        // )

        <div classname="card" style={{ width: "18rem" }}>
            <img classname="card-img-top" src={props.src} alt="Card  cap" />
            <div classname="card-body">
                <h5 classname="card-title"> {props.title}</h5>
                <p classname="card-text">{props.prag}</p>
                <a href="/" className="btn btn-primary">{props.btn}</a>
            </div>
        </div>
    );
}

export default Card;

// https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=600