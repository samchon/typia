import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_isPrune_ArraySimple = _test_isPrune(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.isPrune<ArraySimple>(input),
    ArraySimple.SPOILERS,
);
