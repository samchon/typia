import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_functional_array = _test_assert(
    "functional array",
    FunctionalArray.generate,
    TSON.createAssertType<FunctionalArray>(),
    FunctionalArray.SPOILERS,
);
