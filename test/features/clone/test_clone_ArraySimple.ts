import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_clone_ArraySimple = _test_clone(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.clone<ArraySimple>(input),
);
