import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

import { TypeGuardError } from "typia";

export const test_assert_ConstantEnumeration = _test_assert(TypeGuardError)(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)((input) => typia.assert<ConstantEnumeration>(input));
