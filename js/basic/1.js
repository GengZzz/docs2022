this.$ = {}
this.$.name = 'hello world'
this.$.hello = (arg)=>{
   return arg
}
console.log(this.$.hello('more time '));
console.log( typeof this.$.hello('hello world'));
console.log(typeof this.$.name);
this.$.name = undefined
console.log(this.$);
