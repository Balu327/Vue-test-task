Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div :style="{fontSize : postFontSize + 'em'}">

      <h3> {{ post.title }}</h3>
      <div v-html="post.content" ></div>
      <button @click="postFontSize += 0.1">Enlarge text</button>
      
    </div>`,
  data() {
     return {
          postFontSize : 1
     }
  }
});


var app = new Vue ({
	el:'#app',
	data:{
		fontColor:'#ccc',
		backgroundColor:'fff',
		firsttext:"",
		edit:"",
		 posts : [
      {  content : 'I am the post'},
      
    ]
	},
	computed:{
		styles: function(){
			return{
				color: this.fontColor,
				background: this.backgroundColor

			}
		}
	},
    methods:{
		editing: function(){
			this.edit = this.firsttext

		}
		
	}
})


