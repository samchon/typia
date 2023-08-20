import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_assert_FunctionalArray = _test_assert(
    "FunctionalArray",
    FunctionalArray.generate,
    (input) => typia.assert<FunctionalArray>(input),
    FunctionalArray.SPOILERS,
);
