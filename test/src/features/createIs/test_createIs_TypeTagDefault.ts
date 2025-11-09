import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_createIs_TypeTagDefault = (): void => _test_is(
    "TypeTagDefault",
)<TypeTagDefault>(
    TypeTagDefault
)(typia.createIs<TypeTagDefault>());
