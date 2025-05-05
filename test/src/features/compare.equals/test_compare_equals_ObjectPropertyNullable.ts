import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_compare_equals_ObjectPropertyNullable = _test_compare_equals(
    "ObjectPropertyNullable",
)<ObjectPropertyNullable>(
    ObjectPropertyNullable
)((a, b) => typia.compare.equals<ObjectPropertyNullable>(a, b));
