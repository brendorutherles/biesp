import path from 'path'
import fs from 'fs'

export const cleanDirectory = (directory) => {

  fs.readdir(directory, (err, files) => {
    if (err) throw err;
  
    for (const file of files) {
      fs.unlink(path.join(directory, file), err => {
        if (err) throw err;
      });
    }
  });
};
  