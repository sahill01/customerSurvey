/*var custId =  (function(){
        var id = 1;
        return 
})();*/
let custId = 1;

function start(){

        localStorage.setItem('Customer '+ custId, 'Start')
}

function storeans(a){
        let key = a.id + "_" + custId; 
        let ans = a.value;
        localStorage.setItem(key , ans)
}

function textareavalue(){
        let value = document.getElementById('Ques5').value
        localStorage.setItem('Ques5' + "_" + custId , value )

}

function completed(){
        localStorage.setItem('the_Customer ' + custId, 'Completed')
        custId++;
}
