import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_compare_equals_ObjectHttpAtomic = _test_compare_equals(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(
    ObjectHttpAtomic
)((a, b) => typia.compare.equals<ObjectHttpAtomic>(a, b));
