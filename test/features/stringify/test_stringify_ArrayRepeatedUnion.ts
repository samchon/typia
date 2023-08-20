import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_stringify_ArrayRepeatedUnion = _test_stringify(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    (input) => typia.stringify<ArrayRepeatedUnion>(input),
);
