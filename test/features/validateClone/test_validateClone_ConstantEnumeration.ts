import typia from "typia";

import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ConstantEnumeration = _test_validateClone(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => typia.validateClone(input),
    ConstantEnumeration.SPOILERS,
);
