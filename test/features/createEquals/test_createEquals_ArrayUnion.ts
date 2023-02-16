import typia from "typia";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ArrayUnion = _test_equals(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createEquals<ArrayUnion>(),
);
