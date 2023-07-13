import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_misc_validateClone_UltimateUnion = _test_misc_validateClone(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.misc.validateClone(input),
    UltimateUnion.SPOILERS,
);
