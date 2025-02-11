import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_equals_ObjectDescription = _test_equals(
    "ObjectDescription",
)<ObjectDescription>(
    ObjectDescription
)((input) => typia.equals<ObjectDescription>(input));
