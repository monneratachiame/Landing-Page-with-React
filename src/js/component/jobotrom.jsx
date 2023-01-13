import React from "react";

const Jumbotron = (props) => {
    return (
<div className="container-fluid">
        <div className="jumbotron">
            <h1 className="display-4">Olá, mundo!</h1>
            <p className="lead">
                Este é um simples componente jumbotron para chamar mais atenção a um determinado conteúdo ou informação.
            </p>
            {/* <hr className="my-4"/> */}
           
            <a className="btn btn-primary btn-lg" href="#" role="button">
                Call to action!
            </a>
        </div>
</div>
);

};

export default Jumbotron;