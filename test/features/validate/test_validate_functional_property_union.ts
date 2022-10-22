import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_validate } from "./_test_validate";

export const test_validate_functional_property_union = _test_validate(
    "functional union property",
    FunctionalPropertyUnion.generate,
    (input) => TSON.validate(input),
    FunctionalPropertyUnion.SPOILERS,
);
