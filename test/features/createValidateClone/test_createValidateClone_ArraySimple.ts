import typia from "typia";

import { ArraySimple } from "../../structures/ArraySimple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ArraySimple = _test_validateClone(
    "ArraySimple",
    ArraySimple.generate,
    typia.createValidateClone<ArraySimple>(),
    ArraySimple.SPOILERS,
);
