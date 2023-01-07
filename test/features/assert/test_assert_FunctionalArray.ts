import typia from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_FunctionalArray = _test_assert(
    "FunctionalArray",
    FunctionalArray.generate,
    (input) => typia.assert(input),
    FunctionalArray.SPOILERS,
);