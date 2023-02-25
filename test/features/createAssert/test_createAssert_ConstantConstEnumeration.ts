import typia from "../../../src";

import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ConstantConstEnumeration = _test_assert(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    typia.createAssert<ConstantConstEnumeration>(),
    ConstantConstEnumeration.SPOILERS,
);
