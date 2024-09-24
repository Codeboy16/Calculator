let userDis = document.getElementById('userDis');

function GetDat(data){
    userDis.value +=data;
}
function clearDis(){
    userDis.value = "";
}
function cal(){
    try{
    let x = userDis.value = eval(userDis.value);
    localStorage.setItem("data",x);
    }catch(error){
        userDis.value = "Invalid Input ";
    setTimeout(()=>{
        userDis.value = "";
    },900)    
    }
    
}

function history(){
     userDis.value = localStorage.getItem("data");
}