import typia from "../../../src";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_DynamicComposite = _test_validatePrune(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.validatePrune(input),
    DynamicComposite.SPOILERS,
);
