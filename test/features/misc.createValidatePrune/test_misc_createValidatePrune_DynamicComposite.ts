import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_misc_validatePrune_DynamicComposite =
    _test_misc_validatePrune(
        "DynamicComposite",
        DynamicComposite.generate,
        typia.misc.createValidatePrune<DynamicComposite>(),
        DynamicComposite.SPOILERS,
    );
