import typia from "../../../src";

import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_createIsClone_DynamicEnumeration = _test_isClone(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    typia.createIsClone<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
