import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_stringify_ArrayUnion = _test_stringify(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.stringify(input),
);
