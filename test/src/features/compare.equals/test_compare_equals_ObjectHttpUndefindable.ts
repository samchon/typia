import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_compare_equals_ObjectHttpUndefindable = _test_compare_equals(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(
    ObjectHttpUndefindable
)((a, b) => typia.compare.equals<ObjectHttpUndefindable>(a, b));
