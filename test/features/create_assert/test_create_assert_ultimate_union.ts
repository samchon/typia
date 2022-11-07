import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_ultimate_union = _test_assert(
    "ultimate union",
    UltimateUnion.generate,
    TSON.createAssert<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
