import typia from "typia";

import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ArrayMatrix = _test_validateEquals(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createValidateEquals<ArrayMatrix>(),
);
