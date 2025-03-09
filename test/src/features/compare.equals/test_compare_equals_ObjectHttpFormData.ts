import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_compare_equals_ObjectHttpFormData = _test_compare_equals(
    "ObjectHttpFormData",
)<ObjectHttpFormData>(
    ObjectHttpFormData
)((a, b) => typia.compare.equals<ObjectHttpFormData>(a, b));
