import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_compare_equals_ObjectGenericArray = _test_compare_equals(
    "ObjectGenericArray",
)<ObjectGenericArray>(
    ObjectGenericArray
)((a, b) => typia.compare.equals<ObjectGenericArray>(a, b));
