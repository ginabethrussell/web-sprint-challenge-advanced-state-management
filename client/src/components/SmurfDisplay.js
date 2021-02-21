import React from 'react';
import {connect} from 'react-redux';
import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';

export class SmurfDisplay extends React.Component {

    componentDidMount(){
        console.log('fetching smurfs after page loads');
        this.props.fetchSmurfs();
        
      }

    componentDidUpdate() {
        console.log("In SmurfDisplay", this.props.isLoading);
        console.log(this.props.smurfs);
    }

    render() {
        console.log(this.props.smurfs);
        console.log(this.props.isLoading);
        return(<div>
            {this.props.isLoading? <p>Smurfs are on their way!</p>:
            <div>
                {
                    this.props.smurfs.map(smurf => (
                        <Smurf key={smurf.id} smurf={smurf}/>
                    ))
                }
            </div>}
            
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
    
}
const mapDispatchToProps = {fetchSmurfs};

export default connect(mapStateToProps, mapDispatchToProps)(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.