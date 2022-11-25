import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_FunctionalObjectUnion = _test_isStringify(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    TSON.createIsStringify<FunctionalObjectUnion>(),
    FunctionalObjectUnion.SPOILERS,
);