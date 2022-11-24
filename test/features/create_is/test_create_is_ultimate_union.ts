import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_is } from "../internal/_test_is";

export const test_create_is_ultimate_union = _test_is(
    "ultimate union",
    UltimateUnion.generate,
    TSON.createIs<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
