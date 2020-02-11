import React, { Component } from 'react';
import './App.css';
import $ from "jquery";
import Table from './component/Table';
import Header from './component/Header';
import Content from './component/Content';


class App extends Component {
  constructor(){
    super();
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
    this.state = {
        values:[],
        dummy: null
    };
}


    componentDidUpdate(prevProps, prevState){
      if (this.state.dummy !== prevState.dummy){
        const date=this.state.dummy;
        $.ajax({
        url: `http://hnbex.eu/api/v1/rates/daily/?date=${date}`,
        type: 'GET',
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        crossDomain: true,
        dataType: 'jsonp',
        }).done(function(data) {
        this.setState({values:data});  
      }.bind(this));

      }
      
    }

 
    onButtonSubmit=(e) => {
      e.preventDefault();
      const datum = this.datuum;
      this.setState({dummy: datum.value});
    }

    trebamDatum = () => {
      let today=new Date();
      let dd= today.getDate();
      let mm = today.getMonth()+1;
      const yy = today.getFullYear();
        if(dd<10){
          dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 
      return today=yy+'-'+mm+'-'+dd;
    }

  render() {
    const val = this.state.values.map(e => {
      return <Table
                key={e.median_rate}
                currency={e.currency_code}
                unit={e.unit_value}
                buying={e.buying_rate} 
                median={e.median_rate}
                selling={e.selling_rate} />;
    })

    return (
      <div>
        <Header />
        <div className="filter">
          <input type="date" ref={(c) => this.datuum = c} name="datuum" max={this.trebamDatum()} />
          <button type="button" onClick={this.onButtonSubmit}>Submit date</button>
        </div>
        <div className="body">
          <div className="lorem">
            <Content />
          </div>
          <div className="tablepad">
            <table className="table">
              <thead>
                <tr>
                    <th>Currency code</th>
                    <th>Unit value</th>
                    <th>Buying rate</th>
                    <th>Median rate</th>
                    <th>Selling rate</th>
                </tr>
              </thead>
              <tbody>
                {val}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;