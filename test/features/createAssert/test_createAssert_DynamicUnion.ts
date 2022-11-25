import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_DynamicUnion = _test_assert(
    "DynamicUnion",
    DynamicUnion.generate,
    TSON.createAssert<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);