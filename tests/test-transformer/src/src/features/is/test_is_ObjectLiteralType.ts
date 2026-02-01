import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_is_ObjectLiteralType = (): void => _test_is(
    "ObjectLiteralType",
)<ObjectLiteralType>(
    ObjectLiteralType
)((input) => typia.is<ObjectLiteralType>(input));
