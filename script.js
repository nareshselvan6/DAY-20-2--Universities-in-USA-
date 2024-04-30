let dfetch = fetch(
  "http://universities.hipolabs.com/search?country=United+States"
).then((data) => data.json()).then((response)=>{
    // console.log(response);
    university(response)
})

let divtag=document.createElement("div");
divtag.className="col_4 items_container";

function university(list){
    console.log(list);
    let temp=""
    for(let i=0;i<20;i++){
    temp+=  
    `
    
    <div class="card col-4 ">
    <div class="card-title">
    <img src=${"https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"} alt=" usa flag" class="usaimgflag">
    <hr>
    <div class="card-body">
    <p> University Name : ${list[i].name}</p>
    <p> WebPage: <a href=${list[i].web_pages} target="_blank">${list[i].web_pages}</a></p>
    <p> Domains : ${list[i].domains}</p>
    <p> Country : ${list[i].country}</p>
    </div>
    </div>
    </div>
    
      `

    }
  
    document.getElementById("collegescard").innerHTML=temp

}
