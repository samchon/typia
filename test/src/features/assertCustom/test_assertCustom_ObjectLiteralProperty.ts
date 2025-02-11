import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectLiteralProperty = _test_assert(CustomGuardError)(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(
    ObjectLiteralProperty
)((input) => typia.assert<ObjectLiteralProperty>(input, (p) => new CustomGuardError(p)));
