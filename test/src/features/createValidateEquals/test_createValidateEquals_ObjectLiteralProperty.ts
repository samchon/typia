import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createValidateEquals_ObjectLiteralProperty = _test_validateEquals(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(
    ObjectLiteralProperty
)(typia.createValidateEquals<ObjectLiteralProperty>());
