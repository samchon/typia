import typia from "typia";

import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ArrayMatrix = _test_validate(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createValidate<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
