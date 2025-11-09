import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ObjectLiteralType = (): void => _test_assertEquals(CustomGuardError)(
    "ObjectLiteralType",
)<ObjectLiteralType>(
    ObjectLiteralType
)((input) => typia.assertEquals<ObjectLiteralType>(input, (p) => new CustomGuardError(p)));
