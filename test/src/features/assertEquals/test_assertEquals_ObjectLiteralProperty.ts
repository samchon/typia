import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { TypeGuardError } from "typia";

export const test_assertEquals_ObjectLiteralProperty = _test_assertEquals(TypeGuardError)(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(
    ObjectLiteralProperty
)((input) => typia.assertEquals<ObjectLiteralProperty>(input));
