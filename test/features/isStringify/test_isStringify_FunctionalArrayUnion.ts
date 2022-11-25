import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_FunctionalArrayUnion = _test_isStringify(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    (input) => TSON.isStringify(input),
    FunctionalArrayUnion.SPOILERS,
);