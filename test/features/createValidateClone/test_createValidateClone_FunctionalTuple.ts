import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_FunctionalTuple = _test_validateClone(
    "FunctionalTuple",
    FunctionalTuple.generate,
    TSON.createValidateClone<FunctionalTuple>(),
    FunctionalTuple.SPOILERS,
);
