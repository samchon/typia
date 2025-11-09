import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_validate_ConstantConstEnumeration = (): void => _test_validate(
    "ConstantConstEnumeration",
)<ConstantConstEnumeration>(
    ConstantConstEnumeration
)((input) => typia.validate<ConstantConstEnumeration>(input));
