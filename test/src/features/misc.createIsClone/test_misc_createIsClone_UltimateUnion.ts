import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_misc_createIsClone_UltimateUnion = (): void => _test_misc_isClone(
    "UltimateUnion",
)<UltimateUnion>(
    UltimateUnion
)(typia.misc.createIsClone<UltimateUnion>());
