import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_FunctionalProperty = _test_validateClone(
    "FunctionalProperty",
    FunctionalProperty.generate,
    (input) => TSON.validateClone(input),
    FunctionalProperty.SPOILERS,
);
