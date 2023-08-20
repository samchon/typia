import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_assertClone_TupleRestArray = _test_assertClone(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.assertClone<TupleRestArray>(input),
    TupleRestArray.SPOILERS,
);
