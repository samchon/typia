import typia from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_TupleRestAtomic = _test_assertClone(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.assertClone(input),
    TupleRestAtomic.SPOILERS,
);