import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_stringify_ArrayRepeatedRequired = _test_stringify(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.stringify(input),
);
