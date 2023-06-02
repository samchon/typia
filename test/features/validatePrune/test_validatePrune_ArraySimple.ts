import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_validatePrune_ArraySimple = _test_validatePrune(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.validatePrune(input),
    ArraySimple.SPOILERS,
);
