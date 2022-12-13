import typia from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_FunctionalProperty = _test_isStringify(
    "FunctionalProperty",
    FunctionalProperty.generate,
    (input) => typia.isStringify(input),
    FunctionalProperty.SPOILERS,
);