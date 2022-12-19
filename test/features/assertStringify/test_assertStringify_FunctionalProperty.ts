import typia from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_FunctionalProperty = _test_assertStringify(
    "FunctionalProperty",
    FunctionalProperty.generate,
    (input) => typia.assertStringify(input),
    FunctionalProperty.SPOILERS,
);