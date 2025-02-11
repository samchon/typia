import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_createIs_TypeTagInfinite = _test_is(
    "TypeTagInfinite",
)<TypeTagInfinite>(
    TypeTagInfinite
)(typia.createIs<TypeTagInfinite>());
