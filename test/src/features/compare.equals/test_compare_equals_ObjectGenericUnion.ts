import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_compare_equals_ObjectGenericUnion = _test_compare_equals(
    "ObjectGenericUnion",
)<ObjectGenericUnion>(
    ObjectGenericUnion
)((a, b) => typia.compare.equals<ObjectGenericUnion>(a, b));
