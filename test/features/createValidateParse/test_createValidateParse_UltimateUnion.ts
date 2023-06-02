import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_createValidateParse_UltimateUnion = _test_validateParse(
    "UltimateUnion",
    UltimateUnion.generate,
    typia.createValidateParse<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
