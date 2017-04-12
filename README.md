# babel-folder

babel from source to build

## USAGE

`yarn add @vivaxy/babel-folder`

```js
import babelFolder from '@vivaxy/babel-folder';

const sourceFolder = path.join(__dirname, '..', 'src');
const buildFolder = path.join(__dirname, '..', 'build');
babelFolder(/* source folder absolute path */ sourceFolder, /* output folder absolute path */ buildFolder)
    .then(() => {
        // success
    })
    .catch((ex) => {
        // error
        console.error(ex);
    });
```
