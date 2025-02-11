import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createIs_ConstantEnumeration = _test_is(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)(typia.createIs<ConstantEnumeration>());
