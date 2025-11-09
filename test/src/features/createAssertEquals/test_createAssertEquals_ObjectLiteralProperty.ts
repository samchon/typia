import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ObjectLiteralProperty = (): void => _test_assertEquals(TypeGuardError)(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(
    ObjectLiteralProperty
)(typia.createAssertEquals<ObjectLiteralProperty>());
