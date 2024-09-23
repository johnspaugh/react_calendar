import React from "react";
import './Landing_page.css';
import LP_global from './Landing_page_global';
import { useState } from "react";
import { useEffect } from "react";

    // let Output;
    // let month_names_short; 
    // let AllPeopleList; 
    // let AllMonthList; 
    // let ShowAllPeopleListArea ;
    // let selecteddropdown;  
    // let message;

    // constructor( ){

    //     this.Output ="Currently no Output was selected.";
    //     this.month_names  = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    //     this.month_names_short= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    //     this.AllPeopleList = null;
    //     this.AllMonthList = null;
    //     this.ShowAllPeopleListArea = false;
    //     this.selecteddropdown = null;
    //     this.message = "Test message";
    // }

    function FirstButton(){

    }

    function GetCurrentM(Output, month_names){
        console.log("test gcm");
        let currentDate = new Date();
        let monthIndex = currentDate.getMonth(); 
        let month = monthIndex +1;//Since month index are 0 based you have to increment it by 1.
        //now see output
        // Output.answer 
        let answer ="Today's month "+ month_names[monthIndex]+" = "+ month;
        // this.setState({ Output.answer: "James"});
        // return Output.answer;
        alert(answer);
        return answer;
    }

    function GetCurrentD(Output){
        console.log("test gcd");
        let currentDate = new Date();
        let date = currentDate.getDate();
        //now see output
        // Output.answer
        let answer = "Today's date = "+ date;
        alert(answer);
        return answer;
    }
    
    
    
// const {posts} = props;
// var Output ={
//         answer: "Currently no Output was selected."
//     };
// var Output = LP_global.Output;
//the default return function must have a captial letter begining or else will NOT work.
export default function Landing_page(props) {    
    let [data, setData] = useState(null);

    // useEffect(() => {
    //     fetch("/api")
    //     .then((res) => res.json())
    //     .then((data) => setData(data.message));
    // }, []);

    var Output ={
        answer: "Currently no Output was selected."
    };
    let month_names  = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    let month_names_short= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let AllPeopleList = null;
    let AllMonthList = null;
    let ShowAllPeopleListArea = false;
    let selecteddropdown = null;
    let message = "Test message";
    const [OutPutDisplay, setOutPutDisplay]= useState('Currently no Output was selected');
    // setOutPutDisplay(Output.answer);

    return(
        <>
            {/* <div className="color:red; width: 100%; height: 50px;"> */}
            <div className="main_Landing_Page" >   
                    what this is target test
                    <button >FirstButton</button>                 
            </div>
            
        <div >
            <div className="sideMenu">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <button>See DataTables</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {/* <button onClick={GetCurrentM()} buttonStyle={Button.styles.contained} >Get current Month</button> */}
                                {/* <button   onClick={ (Output) => GetCurrentM(Output, month_names)}  >Get current Month</button>      */}
                                <button   onClick={ () => setOutPutDisplay(GetCurrentM(Output, month_names))}  >Get current Month</button>     
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => setOutPutDisplay( GetCurrentD(Output) )}>Get current Date</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mainHome">
                {OutPutDisplay}
            </div>
            <div>
            <p>{!data ? "Loading..." : data}</p>
            </div>
        </div>
        </>
    );
}
