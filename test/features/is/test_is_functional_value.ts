import TSON from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_is } from "./_test_is";

export const test_is_functional_value = _test_is(
    "functional value",
    FunctionalValue.generate,
    (input) => TSON.is(input),
    // UNABLE TO SPOIL
);
