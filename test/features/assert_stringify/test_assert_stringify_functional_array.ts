import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_functional_array = _test_assert_stringify(
    "functional array",
    FunctionalArray.generate,
    (input) => TSON.assertStringify(input),
    FunctionalArray.SPOILERS,
);
