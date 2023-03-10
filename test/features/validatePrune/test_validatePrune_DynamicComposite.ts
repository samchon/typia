import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_validatePrune_DynamicComposite = _test_validatePrune(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.validatePrune(input),
    DynamicComposite.SPOILERS,
);
