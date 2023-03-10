import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_stringify_ArraySimple = _test_stringify(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.stringify(input),
);
