const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
	count=0;
	for(let i=0;i<library.length;i++){
		l1=library[i];
		if(l1.readingStatus=='true'){
			count+=1;
		}
	}
	return count;
  // write your code here
};

// Do not change the code below

alert(numberOfBooksRead());
