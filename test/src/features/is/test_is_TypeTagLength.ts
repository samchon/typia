import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_is_TypeTagLength = (): void => _test_is(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)((input) => typia.is<TypeTagLength>(input));
