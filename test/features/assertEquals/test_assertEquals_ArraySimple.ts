import typia from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ArraySimple = _test_assertEquals(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.assertEquals(input),
);