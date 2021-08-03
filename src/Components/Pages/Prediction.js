
import React from 'react'
import { Card, ListGroup, CardColumns, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import "../../styles/PageStyle.css"


export default class Prediction extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            PredictionResponse: [],
            Prediction: []

        };


    }


    async componentDidMount() {
        await axios.get('https://react-flask-fantasy.herokuapp.com/prediction-fast')
            .then(response => {
                this.setState({ PredictionResponse: JSON.stringify(response.data) })
            })

        var obj2 = JSON.parse(this.state.PredictionResponse)
        await this.setState({ Prediction: obj2 })


    }



    render() {


        return (



            <Col>

                <h1 style={{ textAlign: 'center' }}>Matchup Predictions</h1>
                <h6 style={{ textAlign: 'center' }}>pls dont take these seriously im dumb</h6>

                {this.state.Prediction.length !== 0 ?



                    <ListGroup>
<Row>
                        {this.state.Prediction.map((item, i) => {
                            return (

                                

                                    <Col lg={6}>
                                        
                                        <ListGroup.Item variant='secondary'>
                                            <h3 style={{ textAlign: 'center' }}>{Object.keys(item)[0]} vs. {Object.keys(item)[1]} </h3>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <h4 style={{ textAlign: 'center' }}>{item[Object.keys(item)[0]][0]} - {item[Object.keys(item)[1]][0]}</h4>
                                        </ListGroup.Item>


                                        {Object.keys(item[Object.keys(item)[0]][1]).map((category, z) => {
                                            return (
                                                <ListGroup.Item style={{ textAlign: 'center' }}>
                                                    <Row>
                                                        <Col lg={4} md={4} xs={4}>

                                                            {item[Object.keys(item)[0]][1][category] > item[Object.keys(item)[1]][1][category] && category !== "TO" ||
                                                                (item[Object.keys(item)[0]][1][category] < item[Object.keys(item)[1]][1][category] && category === "TO") ?

                                                                <strong><i>{item[Object.keys(item)[0]][1][category]}</i></strong>

                                                                :

                                                                <p>{item[Object.keys(item)[0]][1][category]}</p>

                                                            }


                                                        </Col>

                                                        <Col lg={4} md={4} xs={4}>

                                                            <h5><strong>{category}</strong></h5>

                                                        </Col>
                                                        <Col lg={4} md={4} xs={4}>

                                                            {item[Object.keys(item)[0]][1][category] < item[Object.keys(item)[1]][1][category] && category !== "TO" ||
                                                                (item[Object.keys(item)[0]][1][category] > item[Object.keys(item)[1]][1][category] && category === "TO") ?

                                                                <strong><i>{item[Object.keys(item)[1]][1][category]}</i></strong>

                                                                :

                                                                <p>{item[Object.keys(item)[1]][1][category]}</p>

                                                            }

                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            )
                                        })}

                                        <br />

                                    </Col>

                                

                            )

                        })}
                        </Row>
                    </ListGroup>

                    :

                    null

                }


            </Col>

        );
    };
}
