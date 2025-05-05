import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_compare_equals_ObjectUnionCompositePointer = _test_compare_equals(
    "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(
    ObjectUnionCompositePointer
)((a, b) => typia.compare.equals<ObjectUnionCompositePointer>(a, b));
