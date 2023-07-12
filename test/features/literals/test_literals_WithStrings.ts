import typia from '../../../src';
import { _test_literals } from '../../internal/_test_literals';

const areArraysEqual = <T>(a: T[], b: T[]): boolean => a.length === b.length && a.every((elem, i) => elem === b[i]);

export const test_literals_WithStrings = _test_literals(
    'WithStrings',
    () => 'A' as 'A' | 'B',
    (input) => areArraysEqual(typia.literals<typeof input>(), ['A', 'B'])
);
