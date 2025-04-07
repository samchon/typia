import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_compare_equals_ObjectUnionImplicit = _test_compare_equals(
    "ObjectUnionImplicit",
)<ObjectUnionImplicit>(
    ObjectUnionImplicit
)((a, b) => typia.compare.equals<ObjectUnionImplicit>(a, b));
