import { Primitive } from "typia/lib/Primitive";
import { ArrayUtil } from "typia/lib/utils/ArrayUtil";
export function _test_random<T>(_name: string, generator: () => Primitive<T>, assertion: (input: Primitive<T>) => Primitive<T>): () => void {
    return () => ArrayUtil.repeat(100, () => {
        const data: Primitive<T> = generator();
        assertion(data);
    });
}
