import typia from "typia";

import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_DynamicEnumeration = _test_isPrune(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    typia.createIsPrune<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
