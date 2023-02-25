import typia from "../../../src";

import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ConstantEnumeration = _test_is(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    typia.createIs<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);
