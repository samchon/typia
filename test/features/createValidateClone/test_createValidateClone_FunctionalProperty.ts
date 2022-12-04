import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_FunctionalProperty = _test_validateClone(
    "FunctionalProperty",
    FunctionalProperty.generate,
    TSON.createValidateClone<FunctionalProperty>(),
    FunctionalProperty.SPOILERS,
);
