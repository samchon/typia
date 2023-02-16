import typia from "typia";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ArrayUnion = _test_validateStringify(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.validateStringify(input),
    ArrayUnion.SPOILERS,
);
