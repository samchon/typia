import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_FunctionalObjectUnion = _test_validateClone(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    (input) => TSON.validateClone(input),
    FunctionalObjectUnion.SPOILERS,
);
