function question(answer)
{
    if (answer == "yes") {
        document.getElementById("answer").innerHTML = "Get in contact with me:<br>piotr-marendowski [at] tutanota.com";
        document.getElementById("answer").scrollIntoView();
    }
    else if (answer == "no") {
        document.getElementById("answer").innerHTML = "Glad to hear that!";
        document.getElementById("answer").scrollIntoView();
    }
}
const fs = require('fs');
const zeroMd = require('zero-md');

const folderPath = './posts/';
const zeroMdTag = document.querySelector('zero-md');

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    if (file.endsWith('.md')) {
      const filePath = folderPath + file;
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        const html = zeroMd(data);
        zeroMdTag.innerHTML += html;
      });
    }
  });
});
