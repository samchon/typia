import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_isClone_ArrayAny = _test_isClone(
    "ArrayAny",
    ArrayAny.generate,
    (input) => typia.isClone<ArrayAny>(input),
    ArrayAny.SPOILERS,
);
