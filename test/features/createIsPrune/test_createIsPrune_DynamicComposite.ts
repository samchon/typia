import typia from "../../../src";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_DynamicComposite = _test_isPrune(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createIsPrune<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);
