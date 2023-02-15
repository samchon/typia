import typia from "typia";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ArrayUnion = _test_validateEquals(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.validateEquals(input),
);
