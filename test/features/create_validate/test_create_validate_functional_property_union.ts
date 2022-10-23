import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_functional_property_union = _test_validate(
    "functional union property",
    FunctionalPropertyUnion.generate,
    TSON.createValidate<FunctionalPropertyUnion>(),
    FunctionalPropertyUnion.SPOILERS,
);
