import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_FunctionalArray = _test_assertStringify(
    "FunctionalArray",
    FunctionalArray.generate,
    TSON.createAssertStringify<FunctionalArray>(),
    FunctionalArray.SPOILERS,
);
