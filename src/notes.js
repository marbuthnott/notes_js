function Notes() {
  this._all = [];

  this.add = function(noteContent) {
    if (noteContent === "") {
      errorAlert();
      throw new Error("Ryan does not like empty notes");
    } else {
      this._all.push(noteContent);
    }
  };
  this.getList = function(){
    return this._all;
  };
};
