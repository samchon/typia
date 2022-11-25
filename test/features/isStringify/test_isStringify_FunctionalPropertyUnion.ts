import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_FunctionalPropertyUnion = _test_isStringify(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    (input) => TSON.isStringify(input),
    FunctionalPropertyUnion.SPOILERS,
);