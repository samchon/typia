import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_createIs_TypeTagCustom = (): void => _test_is(
    "TypeTagCustom",
)<TypeTagCustom>(
    TypeTagCustom
)(typia.createIs<TypeTagCustom>());
