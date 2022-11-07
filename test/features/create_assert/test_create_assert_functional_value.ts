import TSON from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_functional_value = _test_assert(
    "functional value",
    FunctionalValue.generate,
    TSON.createAssert<FunctionalValue>(),
    // UNABLE TO SPOIL
);
