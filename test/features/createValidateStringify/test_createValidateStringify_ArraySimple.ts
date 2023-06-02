import typia from "../../../src";

import { ArraySimple } from "../../structures/ArraySimple";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_createValidateStringify_ArraySimple = _test_validateStringify(
    "ArraySimple",
    ArraySimple.generate,
    typia.createValidateStringify<ArraySimple>(),
    ArraySimple.SPOILERS,
);
