# babel-folder

babel from source to build

## USAGE

`yarn add @vivaxy/babel-folder`

```js
import babelFolder from '@vivaxy/babel-folder';

babelFolder(source, build)
    .then(() => {
        // success
    })
    .catch((ex) => {
        // error
        console.error(ex);
    });
```
