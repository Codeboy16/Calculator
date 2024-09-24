let userDis = document.getElementById('userDis');

function GetDat(data){
    userDis.value +=data;
}
function clearDis(){
    userDis.value = "";
}
function cal(){
    try{
    userDis.value = eval(userDis.value);
    }catch(error){
        userDis.value = "Invalid Input ";
    setTimeout(()=>{
        userDis.value = "";
    },900)    
    }
    
}