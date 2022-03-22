import React,{Component,useState} from "react";
import axios from "axios";

//const [InData,setData] = useState(['']);
  const onChange = (e) =>{
    console.log(e.target.value);
  };
  async function getAPI(e) {
    const name = e.target.value;
    await axios({
      method: "get",
      url: `http://apis.data.go.kr/1471000/MdcinGrnIdntfcInfoService01/getMdcinGrnIdntfcInfoList01?serviceKey=PkKuhTTMfvkADH3addD1sS6cR5lvf43sgSkgj9XOpwiJ3%2BDj62msgsUOmAS38Ae4kwOqJNUwsLcSLObmwejzKA%3D%3D&item_name=${name}&pageNo=1&numOfRows=3&type=json`,
    }).then(function (response) {
      const dataSet = response.data;
      //InData([dataSet]);

      if(dataSet.body.items[0].ITEM_NAME.length > 0){
        console.log(dataSet.body.items[0].ITEM_NAME);
      }
 
    });
  } 

class Main extends React.Component{
    
    render(){
        return(
            

      <div style={{display:'flex', justifyContent:'center', alignItems:'center',width:'100%', height:'100vh'}}>
            <form style={{display:'flex', flexDirection:'column'}} >
              <label style={{display:'flex', justifyContent:'center'}}>로고</label>
              <input style={{width:'300px',height:'50px'}} type="text" onChange={getAPI}/>
            </form> 
      </div>
         
        
        );
    }
}
export default Main;