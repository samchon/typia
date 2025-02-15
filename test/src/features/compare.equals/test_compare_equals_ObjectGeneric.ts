import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_compare_equals_ObjectGeneric = _test_compare_equals(
    "ObjectGeneric",
)<ObjectGeneric>(
    ObjectGeneric
)((a, b) => typia.compare.equals<ObjectGeneric>(a, b));
