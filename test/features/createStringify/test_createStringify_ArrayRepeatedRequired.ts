import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_createStringify_ArrayRepeatedRequired = _test_stringify(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    typia.createStringify<ArrayRepeatedRequired>(),
);
