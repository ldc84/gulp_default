
const project = {
  init(){
    project.test();
  },
  test(){
    console.log('test');
  }
}

$(function(){
  project.init();
});