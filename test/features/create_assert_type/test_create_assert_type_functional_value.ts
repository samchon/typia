import TSON from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_functional_value = _test_assert_type(
    "functional value",
    FunctionalValue.generate,
    TSON.createAssertType<FunctionalValue>(),
    // UNABLE TO SPOIL
);
