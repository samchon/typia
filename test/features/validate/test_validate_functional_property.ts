import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_functional_property = _test_validate(
    "functional property",
    FunctionalProperty.generate,
    (input) => TSON.validate(input),
    FunctionalProperty.SPOILERS,
);
