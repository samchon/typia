import typia from "../../../src";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_validateEquals_ConstantEnumeration = _test_validateEquals(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)((input) => typia.validateEquals<ConstantEnumeration>(input));
