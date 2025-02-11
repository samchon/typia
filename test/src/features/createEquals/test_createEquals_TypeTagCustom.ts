import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_createEquals_TypeTagCustom = _test_equals(
    "TypeTagCustom",
)<TypeTagCustom>(
    TypeTagCustom
)(typia.createEquals<TypeTagCustom>());
