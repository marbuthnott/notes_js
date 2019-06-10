var runner = {
  runTests: function(unit) {
    Object.keys(unit).forEach(function(test) {
      try {
        unit[test]();
      }
      catch(error) {
        console.log('%c' + error, 'color: red');
        console.log(error)
      }
    });
  }
}
