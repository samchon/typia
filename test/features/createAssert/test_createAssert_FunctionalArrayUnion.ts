import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_FunctionalArrayUnion = _test_assert(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    TSON.createAssert<FunctionalArrayUnion>(),
    FunctionalArrayUnion.SPOILERS,
);