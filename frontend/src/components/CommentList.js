import React, { Component } from "react";
import { Table } from "reactstrap";
import NewCommentModal from "./NewCommentModal";
//import picture from "../picture/avatar.png";
import ConfirmRemovalModal from "./ConfirmRemovalModal";
import '../css/CommentList.css';

class CommentList extends Component {
  render() {
    const comments = this.props.comments;
    const logo = require('../picture/avatar.png');
    return (
      <div class="absolute">
      <div class="desktop">
        <div style={{height:"350px",overflow:"auto"}}>
            <Table style={{width:"100%"}} style={{backgroundColor:"#cf99d6"}}>
              <tr>
                <td style={{width:"10%"}}></td>
                <td style={{width:"25%"}}>Name</td>
                <td style={{width:"30%"}}>Relationship</td>
                <td style={{width:"20%"}}>Comment</td>
                <td >RegistrationDate</td>
                <td ></td>
              </tr>
              {!comments || comments.length <= 0 ? (
                    <tr>
                      <td colSpan="6" align="center"> 
                      <b>Ops, no one here yet</b>
                      </td>
                    </tr>
                    ) : (
                    comments.map(comment => (
                    <tr key={comment.pk}>
                      <td ><center><img src={logo} style={{width:"70px",height:"70px"}} /></center></td>
                      <td style={{width:"10%"}}>{comment.name}</td>
                      <td style={{width:"25%"}}>{comment.relationship}</td>
                      <td style={{width:"30%"}}>{comment.comment}</td>
                      <td style={{width:"20%"}}>{comment.registrationDate}</td>
                      <td align="center">
                        <NewCommentModal
                        create={false}
                        comment={comment}
                        resetState={this.props.resetState}
                        />
                      </td>
                    </tr>
                    ))
                    )}
            </Table>
        </div>
      </div>
      <div class="mobile">
        <div style={{height:"600px",overflowY:"auto",overflowX:"hidden"}}>
          <Table style={{width:"100%"}} style={{backgroundColor:"#cf99d6"}}>
            {!comments || comments.length <= 0 ? (
              <tr>
                <td>
                  <b>Ops, no one here yet</b>
                </td>
              </tr>
              ) : (
              comments.map(comment => (
              <tr key={comment.pk}>
                <table style={{width:"100%"}}>
                  <tr>
                    <td colspane="2"><center><img src={logo} style={{width:"70px",height:"70px"}} /></center></td>
                  </tr>
                  <tr>
                    <td>Name</td><td style={{width:"10%"}}>{comment.name}</td>
                  </tr>
                  <tr>
                    <td>RelationShip</td><td style={{width:"25%"}}>{comment.relationship}</td>
                  </tr>
                  <tr>
                    <td style={{width:"10%"}}>Comment</td><td style={{width:"30%"}}>{comment.comment}</td>
                  </tr>
                  <tr>
                    <td>RegDate</td><td style={{width:"20%"}}>{comment.registrationDate}</td>
                  </tr>
                  <tr>
                    <td></td><td>
                        <NewCommentModal
                        create={false}
                        comment={comment}
                        resetState={this.props.resetState}
                        />
                      </td>
                  </tr>
                  </table>
              </tr>
              ))
              )}
            </Table>
        </div>
      </div>
      <div class="iphone">
        <div style={{height:"300px",overflowY:"auto",overflowX:"hidden"}}>
          <Table style={{width:"100%"}} style={{backgroundColor:"#cf99d6"}}>
            {!comments || comments.length <= 0 ? (
              <tr>
                <td>
                  <b>Ops, no one here yet</b>
                </td>
              </tr>
              ) : (
              comments.map(comment => (
              <tr key={comment.pk}>
                <Table style={{width:"100%"}}>
                  <tr>
                    <td colspane="2"><center><img src={logo} style={{width:"70px",height:"70px"}} /></center></td>
                  </tr>
                  <tr>
                    <td>Name</td><td style={{width:"10%"}}>{comment.name}</td>
                  </tr>
                  <tr>
                    <td>RelationShip</td><td style={{width:"25%"}}>{comment.relationship}</td>
                  </tr>
                  <tr>
                    <td style={{width:"10%"}}>Comment</td><td style={{width:"30%"}}>{comment.comment}</td>
                  </tr>
                  <tr>
                    <td>RegDate</td><td style={{width:"20%"}}>{comment.registrationDate}</td>
                  </tr>
                  <tr>
                    <td></td><td>
                        <NewCommentModal
                        create={false}
                        comment={comment}
                        resetState={this.props.resetState}
                        />
                      </td>
                  </tr>
                  </Table>
              </tr>
              ))
              )}
            </Table>
        </div>
      </div>
     </div>
    );
  }
}

export default CommentList;
                      
                      
                      
