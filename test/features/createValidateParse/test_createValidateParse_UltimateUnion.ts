import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_UltimateUnion = _test_validateParse(
    "UltimateUnion",
    UltimateUnion.generate,
    typia.createValidateParse<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
