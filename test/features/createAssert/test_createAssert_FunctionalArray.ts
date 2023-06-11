import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_createAssert_FunctionalArray = _test_assert(
    "FunctionalArray",
    FunctionalArray.generate,
    typia.createAssert<FunctionalArray>(),
    FunctionalArray.SPOILERS,
);
