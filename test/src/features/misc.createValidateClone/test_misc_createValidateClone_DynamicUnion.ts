import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_misc_createValidateClone_DynamicUnion = (): void => _test_misc_validateClone(
    "DynamicUnion",
)<DynamicUnion>(
    DynamicUnion
)(typia.misc.createValidateClone<DynamicUnion>());
