import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_UltimateUnion = _test_assertClone(
    "UltimateUnion",
    UltimateUnion.generate,
    TSON.createAssertClone<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);