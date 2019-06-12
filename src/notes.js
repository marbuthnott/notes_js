function Notes() {
  this.all = [];

  this.add = function(noteContent) {
    if (noteContent === "") {
      errorAlert();
      throw new Error("Ryan does not like empty notes");
    } else {
      this.all.push(noteContent);
    }
  };
};
