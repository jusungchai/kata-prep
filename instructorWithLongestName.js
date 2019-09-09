const instructorWithLongestName = function(instructors) {
  let instructorWithLongestName = {name: "", course: ""};
  instructors.forEach(function(instructor){
    if (instructor.name.length > instructorWithLongestName.name.length){
      instructorWithLongestName = instructor;
    }
  });
  return instructorWithLongestName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));