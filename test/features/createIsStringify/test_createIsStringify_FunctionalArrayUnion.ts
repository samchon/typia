import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_FunctionalArrayUnion = _test_isStringify(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    TSON.createIsStringify<FunctionalArrayUnion>(),
    FunctionalArrayUnion.SPOILERS,
);
