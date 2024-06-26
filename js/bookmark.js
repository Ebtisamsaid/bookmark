var bookMarkInput=document.getElementById('bookMark');
var urlInput=document.getElementById('uRl');
var submitBtn=document.getElementById('submitBtn');
var updateBtn= document.getElementById('updateBtn');
var index=0;
 var weblist=[];
 if(localStorage.getItem('siteStorage') !==null){
 weblist=JSON.parse(localStorage.getItem('siteStorage'));

 }

DisplayData();

function addSite(){
    if(validation()==true){
    var site={
        name:bookMarkInput.value ,
       url:urlInput.value,
    }
   weblist.push(site);

localStorage.setItem('siteStorage',JSON.stringify(weblist));
    DisplayData();
    ClearForm();
    
}}

function ClearForm(){
    bookMarkInput.value=null;
    urlInput.value=null;
}
function DisplayData(){
    var cartona="";
    for( var i=0 ; i < weblist.length ; i++){
        cartona +=` <tr>
            <td>${[i+1]}</td>
            <td>${weblist[i].name}</td>
            <td><button class="btn btn-outline-info" onclick="visit('${weblist[i].url}')" >visit</button></td>
            <td><button class="btn btn-outline-danger" onclick='deleteItem(${i})'>Delete</button></td>
            <td><button class="btn btn-outline-primary" onclick='updateItem(${i})'>update</button></td>
          
        </tr>`

    }
    document.getElementById('item').innerHTML=cartona;
}
function deleteItem(indexItem){
    weblist.splice(indexItem,1)
    localStorage.setItem('siteStorage',JSON.stringify(weblist));
    DisplayData()
}


function visit(url){
  
  window.open(url)
  
}


function validation(){
    var regex= /^[w]{3}[\.]?[\w]+/ig
var siteName=bookMarkInput.value;
    var text=urlInput.value;   
    var masgName=document.getElementById("invalidmsg")
    if(regex.test(text)==true ){
       

       
        urlInput.classList.add('is-valid');
        urlInput.classList.remove('is-invalid')
        masgName.classList.add('d-none')
        
       return true;
    }
    
        
    
    // if(siteName !==null && siteName !=="")  {
    //     bookMarkInput.classList.add('is-valid');
    //     bookMarkInput.classList.remove('is-invalid')
    // }
    
    else{
        urlInput.classList.add('is-invalid');
        urlInput.classList.remove('is-valid');
        
        masgName.classList.remove("d-none")
        return false;
    }
   
}


function updateItem(indexItem){
    bookMarkInput.value = weblist[indexItem].name
   urlInput.value =  weblist[indexItem].url
   submitBtn.classList.add('d-none');
   updateBtn.classList.remove('d-none');
   index=indexItem
}
function updateButn(index){
    var site={
        name:bookMarkInput.value ,
        url:urlInput.value ,
    }
   weblist.splice( index,1,site );

localStorage.setItem('siteStorage',JSON.stringify(weblist));
    DisplayData();
    ClearForm();
    validation()
}

