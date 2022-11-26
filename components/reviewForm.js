app.component("review-form",{
    data(){
        return{
            name: '',
            review: '',
            rating:null,
            recommand:null
        }
    },

 
    template:
   /*html*/

    `
    <form class="row g-3 justify-content-center " class="review-form" @submit.prevent="onSubmit" style="color: black;"id="rev">
                        <div class="col-md-5" >
                            <label for="name">Name:</label>
                            <input type="text"  class="form-control"  id="name" v-model="name"  placeholder="Full Name" style="background-color: #cfcfcf;">
                        </div>
                       
                        <div class="col-md-9">
                            <label for="review">Comment:</label>
                            <textarea  id="" cols="30" rows="5" class="form-control"
                            id="review"  v-model="review" placeholder="Enter Message" style="background-color: #cfcfcf;"></textarea>
                        </div>
                       
                        <div class="col-md-10">
                    
                            <label for="recommand">DO YOU RECAMMAND US ?</label>
                            <select id="recommand" v-model.number="recommand">
                            <option>Yes</option>
                            <option>No</option>
                            </select>
                            </div>
                            <div class="col-md-10">
                            <label for="rating">Evaluation</label>
                                <select id="rating" v-model.number="rating">
                                    <option>5</option>
                                    <option>4</option>
                                    <option>3</option>
                                    <option>2</option>
                                    <option>1</option>
                                </select>
                                </div>
                                <div class="col-md-6 d-grid">
                            <input  type="submit" class=" " value="comment" style="background-color: #303761; color: white; font-weight; bold"> 
                        </div>
    </form>
    <br> <br> 
    `,

    methods: {
        
        onSubmit(){
            if (this.name==='' || this.review==='' || this.rating=== null || this.recommand=== null ){
                alert('Fill it all please');
                return;
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommand: this.recommand
            }
            this.$emit('review-submitted',productReview);
            
            this.name='';
            this.review='';
            this.rating=null;
            this.recommand=null;
        }
    }

})