import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_compare_equals_ObjectGenericAlias = _test_compare_equals(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(
    ObjectGenericAlias
)((a, b) => typia.compare.equals<ObjectGenericAlias>(a, b));
