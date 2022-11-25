import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_FunctionalTuple = _test_assertStringify(
    "FunctionalTuple",
    FunctionalTuple.generate,
    (input) => TSON.assertStringify(input),
    FunctionalTuple.SPOILERS,
);