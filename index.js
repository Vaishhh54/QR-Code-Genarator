const APIURL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
let imgBox = document.querySelector('.imgBox');
let inputElement = document.querySelector('.input-text');
let btnElement = document.querySelector('.btn');
let qrimage = document.getElementById('qrimage');
console.log(inputElement.value);



document.addEventListener('DOMContentLoaded', function() {
    function generateQR(){
        if(inputElement.value.length > 0){
            qrimage.src = APIURL + inputElement.value;
            imgBox.classList.add("show-img");
        }
        else{
            inputElement.classList.add("error");
            setTimeout(()=>{
            inputElement.classList.remove('error');
            },1000
            )
        }
      
    };
    btnElement.addEventListener('click', generateQR);
});
