import typia from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_TupleRestArray = _test_assertParse(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.assertParse<TupleRestArray>(input),
    TupleRestArray.SPOILERS,
);