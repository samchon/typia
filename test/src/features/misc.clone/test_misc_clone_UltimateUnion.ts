import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_misc_clone_UltimateUnion = (): void => _test_misc_clone(
    "UltimateUnion",
)<UltimateUnion>(
    UltimateUnion
)((input) => typia.misc.clone<UltimateUnion>(input));
