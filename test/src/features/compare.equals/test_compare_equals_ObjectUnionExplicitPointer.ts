import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_compare_equals_ObjectUnionExplicitPointer = _test_compare_equals(
    "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(
    ObjectUnionExplicitPointer
)((a, b) => typia.compare.equals<ObjectUnionExplicitPointer>(a, b));
