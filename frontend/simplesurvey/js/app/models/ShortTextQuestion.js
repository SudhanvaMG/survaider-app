function ShortTextQuestion(label, required, cid, field_type, next, description){
  Question.call(this, label, required, cid, field_type, next, description);
  this.response = "";
  this.minimumResponseLength = 1;
}


ShortTextQuestion.prototype = Object.create(Question.prototype);
ShortTextQuestion.prototype.constructor = ShortTextQuestion;

ShortTextQuestion.prototype.change = function(){
  console.log(this);
  this.checkIfCompleted();
}


ShortTextQuestion.prototype.checkIfCompleted = function(){

  if (this.response.length >= this.minimumResponseLength) {
    this.completed();
    return true;
  }
  else{
    this.incomplete();
    return false;
  }

}

ShortTextQuestion.prototype.resetResponse = function(){

  this.response = "";

}



ShortTextQuestion.prototype.generateResponse = function(){
  return {
    q_id: this.id,
    q_res: this.response
  }
}
