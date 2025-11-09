import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ObjectUnionDouble = (): void => _test_assertGuard(TypeGuardError)(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(
    ObjectUnionDouble
)(typia.createAssertGuard<ObjectUnionDouble>());
