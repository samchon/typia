import TSON from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_FunctionalValue = _test_assert(
    "FunctionalValue",
    FunctionalValue.generate,
    (input) => TSON.assert(input),
);
