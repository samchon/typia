import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_FunctionalValueUnion = _test_assertClone(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    TSON.createAssertClone<FunctionalValueUnion>(),
    FunctionalValueUnion.SPOILERS,
);