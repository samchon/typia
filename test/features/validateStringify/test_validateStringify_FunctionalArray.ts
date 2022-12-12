import typia from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_FunctionalArray = _test_validateStringify(
    "FunctionalArray",
    FunctionalArray.generate,
    (input) => typia.validateStringify(input),
    FunctionalArray.SPOILERS,
);
