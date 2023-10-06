import typia from "../../../src";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_misc_createValidateClone_TypeTagPattern = _test_misc_validateClone(
    "TypeTagPattern",
)<TypeTagPattern>(
    TypeTagPattern
)(typia.misc.createValidateClone<TypeTagPattern>());
