import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_createEquals_TypeTagType = _test_equals(
    "TypeTagType",
)<TypeTagType>(
    TypeTagType
)(typia.createEquals<TypeTagType>());
