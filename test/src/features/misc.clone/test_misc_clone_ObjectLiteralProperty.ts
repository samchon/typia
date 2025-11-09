import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_misc_clone_ObjectLiteralProperty = (): void => _test_misc_clone(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(
    ObjectLiteralProperty
)((input) => typia.misc.clone<ObjectLiteralProperty>(input));
