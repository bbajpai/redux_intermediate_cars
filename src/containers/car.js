import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { carDetail } from '../actions';
import { bindActionCreators } from 'redux';



class Car extends Component{

    componentDidMount(){
        this.props.carDetail(this.props.match.params.id)
    }
     renderDetailsOfCar = ({detail}) => {
         if(detail){
             return detail.map((item)=>{
                 return(
                    <div key={item.id} className="car_detail">
                        <img src={`/images/${item.image}`} alt="a"/>
                        <div className="content">
                            <h2>{item.model}</h2>
                            <h3>{item.brand}</h3>
                            <p>
                                {item.description}
                            </p>

                        </div>
                    </div>
                 )
                 
             })
         }

     }

    render(){
        return(
            <div>
                {this.renderDetailsOfCar(this.props.cars)}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return{
        cars:state.cars
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({carDetail},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Car);