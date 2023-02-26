import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_assertParse_TupleRestArray = _test_assertParse(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.assertParse<TupleRestArray>(input),
    TupleRestArray.SPOILERS,
);
