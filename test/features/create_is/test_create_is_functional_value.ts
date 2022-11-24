import TSON from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_is } from "../internal/_test_is";

export const test_create_is_functional_value = _test_is(
    "functional value",
    FunctionalValue.generate,
    TSON.createIs<FunctionalValue>(),
    // UNABLE TO SPOIL
);
