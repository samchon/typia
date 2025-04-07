import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_compare_equals_ObjectLiteralType = _test_compare_equals(
    "ObjectLiteralType",
)<ObjectLiteralType>(
    ObjectLiteralType
)((a, b) => typia.compare.equals<ObjectLiteralType>(a, b));
