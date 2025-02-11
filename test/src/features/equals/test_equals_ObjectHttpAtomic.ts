import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_equals_ObjectHttpAtomic = _test_equals(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(
    ObjectHttpAtomic
)((input) => typia.equals<ObjectHttpAtomic>(input));
