import typia from "typia";

import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ConstantEnumeration = _test_validateEquals(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => typia.validateEquals(input),
);
