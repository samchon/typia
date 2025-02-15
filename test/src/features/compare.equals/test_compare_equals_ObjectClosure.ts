import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_compare_equals_ObjectClosure = _test_compare_equals(
    "ObjectClosure",
)<ObjectClosure>(
    ObjectClosure
)((a, b) => typia.compare.equals<ObjectClosure>(a, b));
