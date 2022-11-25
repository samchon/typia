import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_FunctionalValueUnion = _test_assert(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    TSON.createAssert<FunctionalValueUnion>(),
    FunctionalValueUnion.SPOILERS,
);