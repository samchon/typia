import typia from "../../../src";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_misc_validateClone_UltimateUnion = _test_misc_validateClone(
    "UltimateUnion",
)<UltimateUnion>(
    UltimateUnion
)((input) => typia.misc.validateClone<UltimateUnion>(input));
