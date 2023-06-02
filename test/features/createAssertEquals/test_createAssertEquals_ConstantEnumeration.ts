import typia from "../../../src";

import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_assertEquals } from "../../internal/_test_assertEquals";

export const test_createAssertEquals_ConstantEnumeration = _test_assertEquals(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    typia.createAssertEquals<ConstantEnumeration>(),
);
