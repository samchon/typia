import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createValidatePrune_DynamicComposite = _test_validatePrune(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createValidatePrune<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);
