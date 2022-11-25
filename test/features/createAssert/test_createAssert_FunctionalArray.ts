import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_FunctionalArray = _test_assert(
    "FunctionalArray",
    FunctionalArray.generate,
    TSON.createAssert<FunctionalArray>(),
    FunctionalArray.SPOILERS,
);
