import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_misc_createValidateClone_TypeTagCustom = (): void => _test_misc_validateClone(
    "TypeTagCustom",
)<TypeTagCustom>(
    TypeTagCustom
)(typia.misc.createValidateClone<TypeTagCustom>());
