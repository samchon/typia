import typia from "../../../src";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_DynamicComposite = _test_assertPrune(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createAssertPrune<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);
