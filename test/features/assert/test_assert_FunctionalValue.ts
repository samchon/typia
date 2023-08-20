import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_assert_FunctionalValue = _test_assert(
    "FunctionalValue",
    FunctionalValue.generate,
    (input) => typia.assert<FunctionalValue>(input),
);
