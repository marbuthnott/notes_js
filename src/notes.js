function Notes() {
  this.all = [];

  this.add = function(noteContent) {
    if (noteContent === "") {
      throw new Error("Ryan does not like empty notes");
    } else {
      this.all.push(noteContent);
    }
  };
};
// Co-authored-by: Oliver Brownlow <olliebrownlow@gmail.com>
// > Co-authored-by: Nicholas Barnes <n3ttl3t@gmail.com>
// > Co-authored-by: Magnus Arbuthnott <magnusarbuthnott@gmail.com>
// > Co-authored-by: Laurence Taylor <ltaylorapp@gmail.com>"
