import typia from "typia";

import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ConstantEnumeration = _test_isPrune(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => typia.isPrune(input),
    ConstantEnumeration.SPOILERS,
);
