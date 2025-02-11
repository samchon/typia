import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectAlias } from "../../structures/ObjectAlias";

import { TypeGuardError } from "typia";

export const test_assertGuard_ObjectAlias = _test_assertGuard(TypeGuardError)(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)((input) => typia.assertGuard<ObjectAlias>(input));
