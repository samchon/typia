import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_UltimateUnion = _test_isClone(
    "UltimateUnion",
    UltimateUnion.generate,
    TSON.createIsClone<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
