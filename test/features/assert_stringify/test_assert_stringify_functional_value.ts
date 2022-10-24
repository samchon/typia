import TSON from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_functional_value = _test_assert_stringify(
    "functional array",
    FunctionalValue.generate,
    (input) => TSON.assertStringify(input),
);
