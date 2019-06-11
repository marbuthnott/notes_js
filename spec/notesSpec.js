var notesSpec = {
  createNotesObject: function(){
    var notes = new Notes();
    assert.isEqual(notes.all[0], undefined);
  },

  addNewNote: function() {
    var notes = new Notes();
    notes.add("My Ryan Gosling nail clipping collection. I need his left little toe to complete!!");
    assert.includes(notes.all, "My Ryan Gosling nail clipping collection. I need his left little toe to complete!!");
  }




};

runner.runTests(notesSpec);
