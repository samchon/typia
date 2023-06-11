import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_stringify_ArrayRepeatedRequired = _test_stringify(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.stringify(input),
);
