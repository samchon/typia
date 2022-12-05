import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_UltimateUnion = _test_validateClone(
    "UltimateUnion",
    UltimateUnion.generate,
    TSON.createValidateClone<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
