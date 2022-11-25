import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_UltimateUnion = _test_assert(
    "UltimateUnion",
    UltimateUnion.generate,
    TSON.createAssert<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
