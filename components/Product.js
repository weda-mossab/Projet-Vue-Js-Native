app.component("product", {
data(){
    return { 
        
        product:"Mesh Genova",
        selectedVariant: 0,
        describ:"New curren 8363 Causal Sport Chronograph Men's Watch Full Steel Male Clock Luxury Business Watches Men Wrist Relogio Masculino",
        details: [
        'Band Length: 28cm',
        'Style: Business',
        'Movement: Quartz',
        'Case Thickness: 13mm',
        'Dial Diameter: 53mm',
        'Band Width: 20mm',
        'Feature: Shock Resistant',
        'Feature: Water Resistant',
        ],
        variants: [
            {image: './assets/img/bleu.jpg' , color:"blue",quantity:0},
            {image: './assets/img/noir.jpg' , color:"black",quantity:50}  
        ],
        
    }
},

template:   

/*html*/ 

 `    
             <img v-bind:src="image" alt="">
                    <h5 class="mt-4 mb-2">{{product}}</h5> 
                    <img src="./assets/img/heart.png" alt="" class="fav" id="imgClickAndChange" onclick="changeImage()">
                    <p> {{describ}}</p>
                    <p v-if="etat" style="font-weight: bold; color: black;">Etat : <span style="color: green;">Disponible &nbsp; <i class="fas fa-check"></i></span> </p>
                    <p v-else style="font-weight: bold; color: black;">Etat : <span style="color: red;">non-disponible &nbsp; <i class="fas fa-times"></i></span> </p>
              
                    <ul> <span style="font-weight: bold; color: black;">Details  :</span> 
                  <li v-for="detail in details" style="color: black;"> {{detail}}</li>
              </ul>
              <button class="btn" 
              v-on:click="removenb" 
              :disabled="!etat">- </button>
              <button class="btn" v-on:click="addnb" :disabled="!etat">+</button> 
              
              <br><br>
              <b style="font-size: large; font-weight: bold; color: black;">Couleurs :</b>
            <div 
                v-for="(variant , index) in variants" 
                @mouseover="updateVariant(index)"
                class="color":style="{ backgroundColor: variant.color}" >
        </div> 
       </div>


        ` 
        ,
        
methods : {
    addnb(){
        // this.nbprod+=1;
        this.$emit('addnb');
    },
    removenb(){
        this.$emit('removenb');
    },
    updateVariant(index){
      this.selectedVariant=index  ; 
         } ,
    addReview(review){
            this.reviews.push(review); 
        }
},

 computed:{
  image(){
   return this.variants[this.selectedVariant].image
},
 etat(){
     return  this.variants[this.selectedVariant].quantity
 }
}
});
function changeImage() {
    var Image_Id = document.getElementById('imgClickAndChange');
    if (Image_Id.src.match("./assets/img/heart.png")) {
        Image_Id.src = "./assets/img/coeur_rouge.png";
    }
    else {
        Image_Id.src = "./assets/img/heart.png";
    }}