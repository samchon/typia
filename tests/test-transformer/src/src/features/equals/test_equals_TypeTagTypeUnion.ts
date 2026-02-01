import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_equals_TypeTagTypeUnion = (): void => _test_equals(
    "TypeTagTypeUnion",
)<TypeTagTypeUnion>(
    TypeTagTypeUnion
)((input) => typia.equals<TypeTagTypeUnion>(input));
