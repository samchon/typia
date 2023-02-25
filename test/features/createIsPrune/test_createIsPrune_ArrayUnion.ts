import typia from "../../../src";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ArrayUnion = _test_isPrune(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createIsPrune<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
