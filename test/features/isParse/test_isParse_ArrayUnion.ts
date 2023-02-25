import typia from "../../../src";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ArrayUnion = _test_isParse(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.isParse<ArrayUnion>(input),
    ArrayUnion.SPOILERS,
);
