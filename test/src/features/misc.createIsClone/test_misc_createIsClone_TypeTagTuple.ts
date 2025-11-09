import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_misc_createIsClone_TypeTagTuple = (): void => _test_misc_isClone(
    "TypeTagTuple",
)<TypeTagTuple>(
    TypeTagTuple
)(typia.misc.createIsClone<TypeTagTuple>());
