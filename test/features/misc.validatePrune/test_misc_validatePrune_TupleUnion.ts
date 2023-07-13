import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_misc_validatePrune_TupleUnion = _test_misc_validatePrune(
    "TupleUnion",
    TupleUnion.generate,
    (input) => typia.misc.validatePrune(input),
    TupleUnion.SPOILERS,
);
