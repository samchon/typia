import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_FunctionalProperty = _test_validate(
    "FunctionalProperty",
    FunctionalProperty.generate,
    TSON.createValidate<FunctionalProperty>(),
    FunctionalProperty.SPOILERS,
);