import typia from "../../../src";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_isPrune_ArrayUnion = _test_isPrune(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.isPrune(input),
    ArrayUnion.SPOILERS,
);
