/**
 * @since 2017-04-11 19:34:12
 * @author vivaxy
 */

import babel from '../../src/index';
import { sourceFolder, buildFolder } from '../config';

export default async() => {
    babel(sourceFolder, buildFolder);
};
