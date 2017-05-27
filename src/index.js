/**
 * @since 2017-04-11 19:28:05
 * @author vivaxy
 */

import path from 'path';

import glob from 'glob-promise';
import fse from 'fs-extra';
import { transformFile } from 'babel-core';

export default (SOURCE_PATH, BUILD_PATH) => {
    const sourceFiles = path.join(SOURCE_PATH, '**', '*.js');
    glob(sourceFiles)
        .then((files) => {
            const transformJobs = files.map((file) => {
                return new Promise((resolve, reject) => {
                    transformFile(file, (err, result) => {
                        if (err) {
                            reject(err);
                        } else {
                            const relativeFilename = path.relative(SOURCE_PATH, file);
                            resolve({
                                relativeFilename,
                                ...result,
                            });
                        }
                    });
                });
            });
            return Promise.all(transformJobs);
        })
        .then((results) => {
            const writeJobs = results.map(({ relativeFilename, code }) => {
                const outputFilename = path.join(BUILD_PATH, relativeFilename);
                return fse.outputFile(outputFilename, code);
            });
            return Promise.all(writeJobs);
        });
};
