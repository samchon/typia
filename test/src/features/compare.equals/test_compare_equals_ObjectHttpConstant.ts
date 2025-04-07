import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_compare_equals_ObjectHttpConstant = _test_compare_equals(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(
    ObjectHttpConstant
)((a, b) => typia.compare.equals<ObjectHttpConstant>(a, b));
