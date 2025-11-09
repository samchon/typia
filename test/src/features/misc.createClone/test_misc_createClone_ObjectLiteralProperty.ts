import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_misc_createClone_ObjectLiteralProperty = (): void => _test_misc_clone(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(
    ObjectLiteralProperty
)(typia.misc.createClone<ObjectLiteralProperty>());
