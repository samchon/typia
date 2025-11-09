import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_standardSchema_createValidate_ConstantEnumeration = (): void => _test_standardSchema_validate(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)(typia.createValidate<ConstantEnumeration>());
