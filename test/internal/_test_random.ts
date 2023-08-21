import { Primitive } from "typia/lib/Primitive";

import { ArrayUtil } from "typia/lib/utils/ArrayUtil";

import { TestStructure } from "../helpers/TestStructure";

export const _test_random =
    (_name: string) =>
    <T>(_factory: TestStructure<T>) =>
    (functor: {
        random: () => Primitive<T>;
        assert: (input: Primitive<T>) => T;
    }) =>
    () =>
        ArrayUtil.repeat(100, () => {
            const data: Primitive<T> = functor.random();
            functor.assert(data);
        });
