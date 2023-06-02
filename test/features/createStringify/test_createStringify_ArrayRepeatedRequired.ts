import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_createStringify_ArrayRepeatedRequired = _test_stringify(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    typia.createStringify<ArrayRepeatedRequired>(),
);
