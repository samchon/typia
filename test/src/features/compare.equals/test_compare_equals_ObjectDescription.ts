import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_compare_equals_ObjectDescription = _test_compare_equals(
    "ObjectDescription",
)<ObjectDescription>(
    ObjectDescription
)((a, b) => typia.compare.equals<ObjectDescription>(a, b));
