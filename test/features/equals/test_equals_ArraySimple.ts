import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_equals_ArraySimple = _test_equals(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.equals<ArraySimple>(input),
);
