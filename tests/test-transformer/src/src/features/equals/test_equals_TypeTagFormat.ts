import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_equals_TypeTagFormat = (): void => _test_equals(
    "TypeTagFormat",
)<TypeTagFormat>(
    TypeTagFormat
)((input) => typia.equals<TypeTagFormat>(input));
