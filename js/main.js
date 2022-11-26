const app = Vue.createApp({
    data(){
    return { 
        reviews:[],
    }
},
    props:{
premium :{
    type:Boolean,
    required:true
}
    },
    data: function(){
        return {
            premium:true,
           // product 0
       nbprod:0,
       
      
// product 1
       nbprod1:0,  
       product1:"Curren Business",
            describ1:"New nograph Men's Watch Full Steel Male Clock Luxury Business Watches Men Wrist Relogio Masculino",
image1:"./assets/img/curren-business.jpg" ,
       etat1:true,
       details1: [
        'Band Length: 20cm',
        'Style: SPORT',
        'Movement: Quartz',
        'Case Material: Alloy',
        'Band Material Type: Leather',
        'Dial Diameter: 45mm',
        'Band Width: 24mmmm',
        'Feature: Water Resistant',
        'Feature: Complete Calendar',
       ],
       variants1: [
        {image1: './assets/img/curren-business.jpg' , color1:"brown",quantity1:50}, 
       ],
       

       // product 2
        nbprod2:0,
        product2:"Quarz Luxe",
        describ2:"New nograph Men's Watch Full Steel Male Clock Luxury Business Watches Men Wrist Relogio Masculino",
        image2:"./assets/img/hiphop-gold.jpg" ,
        etat2:false,
        details2: [
    'Band Length: 23cm',
    'Movement: Quartz',
    'Water Resistance Depth: 3Bar',
    'Case Thickness: 12mm',
    'Case Material: Alloy',
    'Boxes & Cases Material: No package',
    'Band Material Type: Stainless steel',
    'Dial Diameter: 40mm',
    'Band Width: 20mm',
                ],
  variants2: [
   {image: './assets/img/hiphop-gold.jpg' , color:"gold"}, 
            ]
}
    },
    methods:{
        addnb(){
            this.nbprod+=1;
        },
        removenb(){
            if(this.nbprod>0){
              this.nbprod-=1;
            }
          },
        addReview(review){
            this.reviews.push(review); 
        }
    },

    computed:{
      
    },

  
});
function changeImage1() {
    var Image_Id1 = document.getElementById('imgClickAndChange1');
    if (Image_Id1.src.match("./assets/img/heart.png")) {
        Image_Id1.src = "./assets/img/coeur_rouge.png";
    }
    else {
        Image_Id1.src = "./assets/img/heart.png";
    }}
    function changeImage2() {
        var Image_Id2 = document.getElementById('imgClickAndChange2');
        if (Image_Id2.src.match("./assets/img/heart.png")) {
            Image_Id2.src = "./assets/img/coeur_rouge.png";
        }
        else {
            Image_Id2.src = "./assets/img/heart.png";
        }}
