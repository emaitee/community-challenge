import React from 'react';
import Members from './Members';
import Chatting from './Chatting';
import Community from './Community';

class Frame extends React.Component{
render(){
return(
   <div className="row">
   <div className="col-md-2"><Members/></div>
   <div className="col-md-8"><Chatting/></div>
   <div className="col-md-2"><Community/></div>
   </div>
);

}


}

export default Frame;