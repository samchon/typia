import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectLiteralType = (): void => _test_assertGuard(CustomGuardError)(
    "ObjectLiteralType",
)<ObjectLiteralType>(
    ObjectLiteralType
)((input) => typia.assertGuard<ObjectLiteralType>(input, (p) => new CustomGuardError(p)));
