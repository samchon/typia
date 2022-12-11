import TSON from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_TupleRestAtomic = _test_assert(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => TSON.assert(input),
    TupleRestAtomic.SPOILERS,
);