import typia from "../../../src";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_createIsClone_TypeTagType = _test_misc_isClone(
    "TypeTagType",
)<TypeTagType>(
    TypeTagType
)(typia.misc.createIsClone<TypeTagType>());
