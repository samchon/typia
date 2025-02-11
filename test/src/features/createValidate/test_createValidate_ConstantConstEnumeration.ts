import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createValidate_ConstantConstEnumeration = _test_validate(
    "ConstantConstEnumeration",
)<ConstantConstEnumeration>(
    ConstantConstEnumeration
)(typia.createValidate<ConstantConstEnumeration>());
