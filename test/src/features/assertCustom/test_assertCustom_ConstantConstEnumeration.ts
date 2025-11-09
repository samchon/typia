import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ConstantConstEnumeration = (): void => _test_assert(CustomGuardError)(
    "ConstantConstEnumeration",
)<ConstantConstEnumeration>(
    ConstantConstEnumeration
)((input) => typia.assert<ConstantConstEnumeration>(input, (p) => new CustomGuardError(p)));
