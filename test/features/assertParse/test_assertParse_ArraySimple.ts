import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_assertParse_ArraySimple = _test_assertParse(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.assertParse<ArraySimple>(input),
    ArraySimple.SPOILERS,
);
