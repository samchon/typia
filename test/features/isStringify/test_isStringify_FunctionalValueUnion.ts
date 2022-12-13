import typia from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_FunctionalValueUnion = _test_isStringify(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    (input) => typia.isStringify(input),
    FunctionalValueUnion.SPOILERS,
);