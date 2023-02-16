import typia from "typia";

import { ArraySimple } from "../../structures/ArraySimple";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ArraySimple = _test_validateEquals(
    "ArraySimple",
    ArraySimple.generate,
    typia.createValidateEquals<ArraySimple>(),
);
