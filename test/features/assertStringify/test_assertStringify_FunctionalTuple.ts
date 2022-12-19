import typia from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_FunctionalTuple = _test_assertStringify(
    "FunctionalTuple",
    FunctionalTuple.generate,
    (input) => typia.assertStringify(input),
    FunctionalTuple.SPOILERS,
);