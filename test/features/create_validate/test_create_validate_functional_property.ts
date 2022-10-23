import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_functional_property = _test_validate(
    "functional property",
    FunctionalProperty.generate,
    TSON.createValidate<FunctionalProperty>(),
    FunctionalProperty.SPOILERS,
);
