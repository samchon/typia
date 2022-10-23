import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_functional_array_union = _test_validate(
    "functional union array",
    FunctionalArrayUnion.generate,
    TSON.createValidate<FunctionalArrayUnion>(),
    FunctionalArrayUnion.SPOILERS,
);
