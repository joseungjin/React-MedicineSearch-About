import React from "react";
 
function data({
    item_name,
    entp_name,
    item_seq,
    img_regist_ts,
    pageNo,
    numOfRows,
    edi_code,
    serviceKey,

}){
    return(
        <div >
            <h3>결과 값</h3>
            <h4>제품명:{ITEM_NAME}</h4>
            <h4>제품영문명:{ITEM_ENG_NAME}</h4>
        </div>
    );
}
export default data;