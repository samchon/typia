import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_FunctionalArray = _test_validateClone(
    "FunctionalArray",
    FunctionalArray.generate,
    (input) => TSON.validateClone(input),
    FunctionalArray.SPOILERS,
);
