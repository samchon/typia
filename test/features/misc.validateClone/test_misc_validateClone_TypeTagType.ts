import typia from "../../../src";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_validateClone_TypeTagType = _test_misc_validateClone(
    "TypeTagType",
)<TypeTagType>(
    TypeTagType
)((input) => typia.misc.validateClone<TypeTagType>(input));
