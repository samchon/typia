import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_compare_equals_TypeTagFormat = _test_compare_equals(
    "TypeTagFormat",
)<TypeTagFormat>(
    TypeTagFormat
)((a, b) => typia.compare.equals<TypeTagFormat>(a, b));
