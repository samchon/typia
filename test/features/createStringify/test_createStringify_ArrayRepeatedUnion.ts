import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_createStringify_ArrayRepeatedUnion = _test_stringify(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.createStringify<ArrayRepeatedUnion>(),
);
