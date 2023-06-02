import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createValidatePrune_TemplateAtomic = _test_validatePrune(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createValidatePrune<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
