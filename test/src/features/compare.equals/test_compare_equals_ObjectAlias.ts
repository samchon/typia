import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_compare_equals_ObjectAlias = _test_compare_equals(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)((a, b) => typia.compare.equals<ObjectAlias>(a, b));
