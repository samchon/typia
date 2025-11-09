import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_validate_ConstantEnumeration = (): void => _test_validate(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)((input) => typia.validate<ConstantEnumeration>(input));
