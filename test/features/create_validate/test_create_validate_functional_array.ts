import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_functional_array = _test_validate(
    "functional array",
    FunctionalArray.generate,
    TSON.createValidate<FunctionalArray>(),
    FunctionalArray.SPOILERS,
);
