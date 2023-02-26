import typia from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ArraySimple = _test_validateClone(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.validateClone(input),
    ArraySimple.SPOILERS,
);
