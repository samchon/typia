import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_validateParse_UltimateUnion = _test_validateParse(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.validateParse<UltimateUnion>(input),
    UltimateUnion.SPOILERS,
);
