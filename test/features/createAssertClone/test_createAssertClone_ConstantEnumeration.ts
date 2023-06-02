import typia from "../../../src";

import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_createAssertClone_ConstantEnumeration = _test_assertClone(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    typia.createAssertClone<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);
