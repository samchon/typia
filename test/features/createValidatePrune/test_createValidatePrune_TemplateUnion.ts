import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createValidatePrune_TemplateUnion = _test_validatePrune(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createValidatePrune<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
