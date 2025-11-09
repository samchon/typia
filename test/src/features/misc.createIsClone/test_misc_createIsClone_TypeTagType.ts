import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_createIsClone_TypeTagType = (): void => _test_misc_isClone(
    "TypeTagType",
)<TypeTagType>(
    TypeTagType
)(typia.misc.createIsClone<TypeTagType>());
