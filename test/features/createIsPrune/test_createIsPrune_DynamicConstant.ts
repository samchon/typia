import typia from "typia";

import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_DynamicConstant = _test_isPrune(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createIsPrune<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
