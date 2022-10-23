import TSON from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_functional_value = _test_validate(
    "functional value",
    FunctionalValue.generate,
    TSON.createValidate<FunctionalValue>(),
);
