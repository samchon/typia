import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_FunctionalObjectUnion = _test_isStringify(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    (input) => TSON.isStringify(input),
    FunctionalObjectUnion.SPOILERS,
);
