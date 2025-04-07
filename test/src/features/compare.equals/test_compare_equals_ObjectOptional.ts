import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_compare_equals_ObjectOptional = _test_compare_equals(
    "ObjectOptional",
)<ObjectOptional>(
    ObjectOptional
)((a, b) => typia.compare.equals<ObjectOptional>(a, b));
