import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_is_TypeTagTypeUnion = (): void => _test_is(
    "TypeTagTypeUnion",
)<TypeTagTypeUnion>(
    TypeTagTypeUnion
)((input) => typia.is<TypeTagTypeUnion>(input));
