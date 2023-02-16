import typia from "typia";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_DynamicComposite = _test_validatePrune(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createValidatePrune<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);
