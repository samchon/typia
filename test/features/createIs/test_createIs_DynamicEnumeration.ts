import typia from "../../../src";

import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_is } from "../../internal/_test_is";

export const test_createIs_DynamicEnumeration = _test_is(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    typia.createIs<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
