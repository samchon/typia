import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_assertClone_ArrayAny = _test_assertClone(
    "ArrayAny",
    ArrayAny.generate,
    (input) => typia.assertClone(input),
    ArrayAny.SPOILERS,
);
