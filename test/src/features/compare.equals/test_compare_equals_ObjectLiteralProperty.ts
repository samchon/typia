import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_compare_equals_ObjectLiteralProperty = _test_compare_equals(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(
    ObjectLiteralProperty
)((a, b) => typia.compare.equals<ObjectLiteralProperty>(a, b));
