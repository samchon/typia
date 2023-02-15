import typia from "typia";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ArrayUnion = _test_validate(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createValidate<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
