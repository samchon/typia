import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_FunctionalValueUnion = _test_isClone(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    TSON.createIsClone<FunctionalValueUnion>(),
    FunctionalValueUnion.SPOILERS,
);