function mahi(){
   fetch("data.json")
   .then((response)=>{
        var data = response.json()    //converting into json data
        return data;    //here returning data object
   }).then((data)=>{
        console.log(data);


        let output ="";
        data.forEach(function(item){
            output+= `
            <div class="center">
            <div class = "gallary">
                  <div class="img"> 
                     <img class="image" src = ${item.ImageUrl} alt = 'not found'>
                   </div>

                    <h3 class ="title1">${item.ID}</h3>
                
                    <p class="des">${item.ShortDesc}</p>
                    
                <button id="button">View</button>
         </div>
          </div>
            `

            ///////

            ///////
        }) 
        document.getElementById("output").innerHTML=output;
   })
}
mahi(); //calling function 


