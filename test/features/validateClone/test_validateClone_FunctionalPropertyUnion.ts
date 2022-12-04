import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_FunctionalPropertyUnion = _test_validateClone(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    (input) => TSON.validateClone(input),
    FunctionalPropertyUnion.SPOILERS,
);
