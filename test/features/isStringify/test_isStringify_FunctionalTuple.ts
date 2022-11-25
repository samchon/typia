import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_FunctionalTuple = _test_isStringify(
    "FunctionalTuple",
    FunctionalTuple.generate,
    (input) => TSON.isStringify(input),
    FunctionalTuple.SPOILERS,
);
