import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { UltimateUnion } from "../../structures/UltimateUnion";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_UltimateUnion = (): void => _test_misc_assertClone(TypeGuardError)(
    "UltimateUnion",
)<UltimateUnion>(
    UltimateUnion
)((input) => typia.misc.assertClone<UltimateUnion>(input));
