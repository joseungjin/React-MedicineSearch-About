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
      console.log(dataSet.body.items[0].ITEM_NAME);
    });
  } 

class Main extends React.Component{
    
    render(){
        return(
            <div className="App">
            <header className="App-header">
              <p>
                임시 이름
              </p>
             <div style={{width:'100%'}}>
                <input type ='text' name = 'name' className='searchInput' placeholder="약 품명을 입력해주세요" onChange={getAPI}></input>
                <button className='searchBtn' onClick={onChange}>검색</button>
            </div> 
            </header>
            <div>
              
            </div>
          </div>
        
        );
    }
}
export default Main;