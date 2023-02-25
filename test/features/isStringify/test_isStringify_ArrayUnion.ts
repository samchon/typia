import typia from "../../../src";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ArrayUnion = _test_isStringify(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.isStringify(input),
    ArrayUnion.SPOILERS,
);
