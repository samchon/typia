import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_FunctionalValueUnion = _test_validateClone(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    (input) => TSON.validateClone(input),
    FunctionalValueUnion.SPOILERS,
);
