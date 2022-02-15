const str = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let timer = 100;
for(const item of str) {
  setTimeout(() => {
    process.stdout.write(item);
  }, timer);
  timer += 100;
}