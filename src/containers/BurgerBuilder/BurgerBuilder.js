import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary'
import Burger from '../../components/Burger/Burger'

class BurgerBuider extends Component {
    state = {  }
    render() {
        return (
           <Aux>
               <Burger />
               <div>Build Controls</div>
           </Aux>
        );
    }
}

export default BurgerBuider;