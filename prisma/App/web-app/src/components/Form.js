import React, { Component } from 'react';
import {Dropbox} from 'dropbox';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import './dropzone-override.css';
import LoadingSpinner from './LoadingSpinner';


import {Alert} from 'react-bootstrap';

class Form extends Component {
   constructor(props) {
    super(props);
    this.state = { files: [],
                  loading: false, // will be true when ajax request is running
                  alert: false,
                  response: "",
                  filterName:"",
                  emailId:""
      };
   }
      
	 static defaultProps = {
    filters: ['Wave', 'Modern Art', 'Painting']
  }



onDrop(files) {
    this.setState({
      files
    });
  }


  handleSubmit(e) {
    console.log(this.refs.filter.value);
   this.setState({filterName: this.refs.filter.value});
   const data = new FormData();
   data.append('contentImage', this.state.files[0]);
   data.append('filterName', this.refs.filter.value);
   this.setState({ loading: true }, () => {
   var dbx = new Dropbox({ accessToken: '56Avmht1CGkAAAAAAAABS8gYYmjrmVC5HZc6ThJbMT168Y1MrWhY0wjfXUln64i4' });
   var re = /\S+@\S+\.\S+/;
   if(this.state.files[0]===undefined || !re.test(this.refs.email.value)) {this.setState({alert:true,loading:false})}
    else{
   dbx.filesUpload({path: '/prisma/input/'+this.refs.email.value+"/"+this.refs.filter.value+"_"+this.state.files[0].name, contents: this.state.files[0]})
   .then(response=> {
        this.setState({
         loading: false,
         alert: true,
         files: [],
         response: response})}) 
    .catch(function(error) {
            console.error(error);
          });

 } });
    e.preventDefault(); 

}
  handleDismiss() {
    this.setState({ alert: false });
  }


	render() {
		let filterOptions = this.props.filters.map(filter => {
      return <option key={filter} value={filter}>{filter}</option>
    });
    const {loading, alert, response } = this.state;

		return(
      <div className="SelectUseCase">
        {alert? <div className="pull-right">{JSON.stringify(response.id)!==undefined? <Alert bsStyle="success"  onDismiss={this.handleDismiss.bind(this)}>"File Upload Successful!!"</Alert>:<Alert bsStyle="danger" onDismiss={this.handleDismiss.bind(this)}>"Oops! Well this is embarassing. Please try again."</Alert>}</div>:<span></span>}
        <br/>
        <h3>Neural Style uploader </h3>
         {loading ? <LoadingSpinner />:<div></div>}
      <div className="row">

        <div className="col-sm-4">
        <h3>Step 1.</h3>
          <div className="form-group">
            <label for="filter"> <h4>Select Filter:</h4> </label> 
            <select className="form-control" ref="filter">
                      {filterOptions}
                  </select>
          </div>
          <div className="form-group">
            <label><h4> Enter Email Address:</h4></label>
            <input type="text" className="form-control" ref="email"/>
          </div>
        </div>

         <div className="col-sm-2"></div>
         <div className="col-sm-4">
        <div className="dropzone">
        <h3> Step 2. Upload Your Image / Video:</h3> 
          <Dropzone onDrop={this.onDrop.bind(this)} className=" text-center dropzone-override">
            <h4>Try dropping a file here  <br/><br/>
            <i className="push-down fa fa-upload fa-lg"/> <br/><br/>
           or click to upload file </h4><br/>
           <h4>Dropped file:</h4>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
          </Dropzone>
        </div>
			</div>
      </div>
      <br/>
      <div className="row ">
      <div className="col-sm-3 pull-right">
        <button className="btn btn-primary" type="submit" onClick={this.handleSubmit.bind(this)}> Submit </button>  
      </div>
      </div>
      </div>
		);
	}
}

export default Form;