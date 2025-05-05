import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_compare_equals_ObjectUnionExplicit = _test_compare_equals(
    "ObjectUnionExplicit",
)<ObjectUnionExplicit>(
    ObjectUnionExplicit
)((a, b) => typia.compare.equals<ObjectUnionExplicit>(a, b));
