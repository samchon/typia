import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_isClone_ArraySimple = _test_isClone(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.isClone<ArraySimple>(input),
    ArraySimple.SPOILERS,
);
