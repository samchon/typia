import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_assertPrune_DynamicComposite = _test_assertPrune(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.assertPrune(input),
    DynamicComposite.SPOILERS,
);
