import typia from "../../../src";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_assertPrune_DynamicComposite = _test_assertPrune(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.assertPrune(input),
    DynamicComposite.SPOILERS,
);
