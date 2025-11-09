import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ObjectUnionDouble = (): void => _test_assertGuardEquals(TypeGuardError)(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(
    ObjectUnionDouble
)(typia.createAssertGuardEquals<ObjectUnionDouble>());
