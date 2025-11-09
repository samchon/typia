import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_misc_createClone_TypeTagFormat = (): void => _test_misc_clone(
    "TypeTagFormat",
)<TypeTagFormat>(
    TypeTagFormat
)(typia.misc.createClone<TypeTagFormat>());
