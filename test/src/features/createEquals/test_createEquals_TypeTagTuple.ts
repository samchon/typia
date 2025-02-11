import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_createEquals_TypeTagTuple = _test_equals(
    "TypeTagTuple",
)<TypeTagTuple>(
    TypeTagTuple
)(typia.createEquals<TypeTagTuple>());
