import typia from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_FunctionalTupleUnion = _test_isStringify(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    (input) => typia.isStringify(input),
    FunctionalTupleUnion.SPOILERS,
);