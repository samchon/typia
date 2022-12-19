import typia from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_FunctionalPropertyUnion = _test_assertStringify(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    (input) => typia.assertStringify(input),
    FunctionalPropertyUnion.SPOILERS,
);