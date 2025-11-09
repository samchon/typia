import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ObjectLiteralProperty = (): void => _test_assertGuardEquals(TypeGuardError)(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(
    ObjectLiteralProperty
)(typia.createAssertGuardEquals<ObjectLiteralProperty>());
