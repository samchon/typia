import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_compare_equals_ObjectUnionComposite = _test_compare_equals(
    "ObjectUnionComposite",
)<ObjectUnionComposite>(
    ObjectUnionComposite
)((a, b) => typia.compare.equals<ObjectUnionComposite>(a, b));
