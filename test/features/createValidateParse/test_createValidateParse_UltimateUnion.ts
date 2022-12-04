import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_UltimateUnion = _test_validateParse(
    "UltimateUnion",
    UltimateUnion.generate,
    TSON.createValidateParse<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
