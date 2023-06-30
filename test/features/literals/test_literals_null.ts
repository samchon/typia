import typia from '../../../src';
import { _test_literals } from '../../internal/_test_literals';

const areArraysEqual = <T>(a: T[], b: T[]): boolean => a.length === b.length && a.every((elem, i) => elem === b[i]);

export const test_literals_string = _test_literals(
    'ArrayAtomicAlias',
    () => 'A' as 'A' | 'B' | null,
    (input) => {
        const generatedArray = typia.literals<typeof input>();
        return areArraysEqual(generatedArray, ['A', 'B', null]);
    }
);