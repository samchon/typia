import typia from "../../../src";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ArrayUnion = _test_validateStringify(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createValidateStringify<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
