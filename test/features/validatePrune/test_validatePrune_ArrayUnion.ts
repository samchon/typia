import typia from "../../../src";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_validatePrune_ArrayUnion = _test_validatePrune(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.validatePrune(input),
    ArrayUnion.SPOILERS,
);
