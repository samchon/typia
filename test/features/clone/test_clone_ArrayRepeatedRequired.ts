import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_clone_ArrayRepeatedRequired = _test_clone(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.clone<ArrayRepeatedRequired>(input),
);
