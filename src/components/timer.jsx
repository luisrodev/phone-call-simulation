import React, { Component} from 'react';
import * as moment from 'moment';

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: this.convertToIso(new Date()),
            callStarted: this.props.actuallyDate,
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
        () => this.tick(),
        1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            //date: moment(new Date()).format("hh:mm:ss")
            date: this.convertToIso(new Date()),
        });
    }

    convertToIso(date){
        return date.toISOString();
    }

    getRealDT(isoDate){
        return moment(isoDate).format("DD/MM/YYYY hh:mm:ss");
    }

    getDiferences() {
        const ms = moment(this.state.date).diff(this.state.callStarted);
        const duration = moment.duration(ms);
        return `Años: ${duration.years()} Meses: ${duration.months()}
                Dias: ${duration.days()} Horas: ${duration.hours()}
                Minutos: ${duration.minutes()} Segundos: ${duration.seconds()}`;
    }

    render(){
        return (
            <div>
                <h1>Call Started at: {this.getRealDT(this.state.callStarted)} </h1>
                <h2>Current Time: {this.getRealDT(this.state.date)} </h2>
                <h3>Diference:  {this.getDiferences()} </h3>
            </div>
        );
    }
    
}

export default Timer;
