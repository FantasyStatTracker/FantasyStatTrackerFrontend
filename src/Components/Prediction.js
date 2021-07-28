
import React from 'react'
import { Image, Spinner, Card, CardGroup, Container, Button, Table, ButtonGroup, Nav, Navbar, Form, FormControl, ToggleButton, Col, Row, Badge, Alert, DropdownButton, Dropdown, Jumbotron, ListGroup, CardDeck, CardColumns, ListGroupItem } from 'react-bootstrap'
import axios from 'axios'
import "../PageStyle.css"
import PlayerData from "../PlayerData.json"
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

export default class Prediction extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            PredictionResponse: [],
            Prediction: []


        };



    }


    async componentDidMount() {
        await axios.get('/prediction-fast')
            .then(response => {
                this.setState({ PredictionResponse: JSON.stringify(response.data) })
            })





        var obj2 = JSON.parse(this.state.PredictionResponse)
        await this.setState({ Prediction: obj2 })
        console.log(this.state.Prediction)
    }



    render() {


        return (



            <div>

                <h1 style={{ textAlign: 'center' }}>Matchup Predictions</h1>
                <h6 style={{ textAlign: 'center' }}>pls dont take these seriously im dumb</h6>

                {this.state.Prediction.length !== 0 ?

                    <CardColumns>


                        {this.state.Prediction.map((item, i) => {
                            return (

                                <Card style={{ width: '100%' }}>


                                    <Card.Body>
                                        <ListGroup horizontal>
                                            {Object.keys(item).map((x, e) => {
                                                return (
                                                    <div>
                                                        <ListGroup.Item variant='secondary'>
                                                            <strong>{x}</strong>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item>
                                                            <strong>{item[x][0]}</strong>
                                                        </ListGroup.Item>




                                                        {Object.keys(item[x][1]).map((y, z) => {
                                                            return (
                                                                <ListGroup.Item>
                                                                    <strong>{y}</strong> &nbsp;&nbsp;&nbsp;{item[x][1][y]}
                                                                </ListGroup.Item>
                                                            )
                                                        })}





                                                    </div>

                                                )

                                            })}
                                        </ListGroup>
                                    </Card.Body>



                                </Card>

                            )

                        })}

                    </CardColumns>


                    :

                    <p>

                    </p>

                }



            </div>





        );
    };
}

