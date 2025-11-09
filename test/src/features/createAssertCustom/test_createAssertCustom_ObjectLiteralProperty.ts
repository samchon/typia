import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectLiteralProperty = (): void => _test_assert(CustomGuardError)(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(
    ObjectLiteralProperty
)(typia.createAssert<ObjectLiteralProperty>((p) => new CustomGuardError(p)));
