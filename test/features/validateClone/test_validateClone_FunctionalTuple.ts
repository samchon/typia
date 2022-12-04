import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_FunctionalTuple = _test_validateClone(
    "FunctionalTuple",
    FunctionalTuple.generate,
    (input) => TSON.validateClone(input),
    FunctionalTuple.SPOILERS,
);
