import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_is_TypeTagDefault = (): void => _test_is(
    "TypeTagDefault",
)<TypeTagDefault>(
    TypeTagDefault
)((input) => typia.is<TypeTagDefault>(input));
