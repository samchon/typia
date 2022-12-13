import typia from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_FunctionalArray = _test_isStringify(
    "FunctionalArray",
    FunctionalArray.generate,
    typia.createIsStringify<FunctionalArray>(),
    FunctionalArray.SPOILERS,
);