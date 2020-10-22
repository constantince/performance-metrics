import FP from './fp';
import { HandleCustom } from '../types/types';

const FCP = (callback: HandleCustom) => {
    FP(callback, 'first-contentful-paint')
};

export default FCP;