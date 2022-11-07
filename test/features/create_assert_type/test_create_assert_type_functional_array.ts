import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_functional_array = _test_assert_type(
    "functional array",
    FunctionalArray.generate,
    TSON.createAssertType<FunctionalArray>(),
    FunctionalArray.SPOILERS,
);
