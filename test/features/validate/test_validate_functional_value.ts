import TSON from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_validate } from "./_test_validate";

export const test_validate_functional_value = _test_validate(
    "functional value",
    FunctionalValue.generate,
    (input) => TSON.validate(input),
    // UNABLE TO SPOIL
);
