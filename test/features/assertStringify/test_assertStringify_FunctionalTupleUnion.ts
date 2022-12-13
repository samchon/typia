import typia from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_FunctionalTupleUnion = _test_assertStringify(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    (input) => typia.assertStringify(input),
    FunctionalTupleUnion.SPOILERS,
);
