import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_validatePrune_TupleUnion = _test_validatePrune(
    "TupleUnion",
    TupleUnion.generate,
    (input) => typia.validatePrune(input),
    TupleUnion.SPOILERS,
);
