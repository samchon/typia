import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_is_ObjectLiteralProperty = (): void => _test_is(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(
    ObjectLiteralProperty
)((input) => typia.is<ObjectLiteralProperty>(input));
