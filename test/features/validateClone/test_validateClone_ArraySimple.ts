import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_validateClone_ArraySimple = _test_validateClone(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.validateClone<ArraySimple>(input),
    ArraySimple.SPOILERS,
);
