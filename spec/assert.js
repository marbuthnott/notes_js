var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },

  isEqual: function(firstItem, secondItem) {
    if (firstItem != secondItem) {
      throw new Error("Assertion failed: " + firstItem + " & " + secondItem + " are not equal");
    }
  },

  includes: function(firstItem, secondItem) {
    if (!firstItem.includes(secondItem)) {
      throw new Error("Assertion failed: [" + firstItem + "] does not include " + secondItem);
    }
  }
};
