import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_FunctionalValueUnion = _test_isStringify(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    TSON.createIsStringify<FunctionalValueUnion>(),
    FunctionalValueUnion.SPOILERS,
);