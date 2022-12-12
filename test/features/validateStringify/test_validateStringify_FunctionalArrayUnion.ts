import typia from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_FunctionalArrayUnion = _test_validateStringify(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    (input) => typia.validateStringify(input),
    FunctionalArrayUnion.SPOILERS,
);