import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ConstantConstEnumeration = (): void => _test_assert(CustomGuardError)(
    "ConstantConstEnumeration",
)<ConstantConstEnumeration>(
    ConstantConstEnumeration
)(typia.createAssert<ConstantConstEnumeration>((p) => new CustomGuardError(p)));
