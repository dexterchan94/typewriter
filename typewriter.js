const typewriter = (sentence, interval) => {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, i * interval);
  }
  
  setTimeout(() => {
    process.stdout.write("\n");
  }, sentence.length * interval);
};

// Test case
typewriter("hello there from lighthouse labs", 50);