import typia from "../../../src";

import { ArraySimple } from "../../structures/ArraySimple";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_isPrune_ArraySimple = _test_isPrune(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.isPrune(input),
    ArraySimple.SPOILERS,
);
