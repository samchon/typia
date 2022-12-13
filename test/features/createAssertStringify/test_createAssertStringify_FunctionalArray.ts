import typia from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_FunctionalArray = _test_assertStringify(
    "FunctionalArray",
    FunctionalArray.generate,
    typia.createAssertStringify<FunctionalArray>(),
    FunctionalArray.SPOILERS,
);
