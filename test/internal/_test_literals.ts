import { Spoiler } from '../helpers/Spoiler';

export function _test_literals<T>(name: string, generator: () => T, validator: (input: T) => boolean): () => void {
    return () => {
        if (validator(generator()) === false) throw new Error(`Bug on typia.literals(): array is different than expected`);
    };
}
