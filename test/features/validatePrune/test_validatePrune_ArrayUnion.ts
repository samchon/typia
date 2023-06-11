import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_validatePrune_ArrayUnion = _test_validatePrune(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.validatePrune(input),
    ArrayUnion.SPOILERS,
);
