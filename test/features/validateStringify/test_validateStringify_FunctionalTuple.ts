import typia from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_FunctionalTuple = _test_validateStringify(
    "FunctionalTuple",
    FunctionalTuple.generate,
    (input) => typia.validateStringify(input),
    FunctionalTuple.SPOILERS,
);
