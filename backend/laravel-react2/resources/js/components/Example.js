import React, { Component, useEffec, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
function Example() {
    const [deneme, setDeneme] = useState([]);
    const axiosTest = e => {
        e.preventDefault();
        axios.get(`http://laravel-react2.test/api/posts`).then(res => {
            const dat = res.data;
            setDeneme(dat);
        });
    };
    axios.get(`http://laravel-react2.test/api/posts`).then(res => {
        const dat = res.data;
        console.log(dat);
    });
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">
                            I'm an example componenttt!
                            <h1>asdasdasdas</h1>
                            {deneme.map(d => (
                                <h3 style={{ color: "red" }}>
                                    title : {d.title}
                                </h3>
                            ))}
                            <button onClick={axiosTest} type="submit">
                                Test
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
